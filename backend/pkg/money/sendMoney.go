package money

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// ny uuid anaty params de ny uuid an'i envoyeur
type sendMoneyRequest struct {
	Value int `json:"value"`
}

func (h handler) SendMoney(ctx *gin.Context) {
	uuidConnected, _ := ctx.Get("uuid")
	uuidRecepteur := ctx.Param("uuid")
	uuidConnectedStr := fmt.Sprint(uuidConnected)
	body := new(sendMoneyRequest)

	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})

		return
	}
	value := body.Value
	userConnected, _ := h.GetUserByuuid(uuidConnectedStr)
	userRecepteur, _ := h.GetUserByuuid(uuidRecepteur)
	fraisTransfer := (float32(body.Value) * 0.01)
	if value > userConnected.Moneys {
		err := fmt.Errorf("impossible d'envoyer votre argent %v l'argent que vous voulez envoyer est %v", userConnected.Moneys, value)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	message := fmt.Sprintf("%v a envoye un argent d'un montant de %v a %v", userConnected.AppUserName, value, userRecepteur.AppUserName)
	userConnected.Moneys = (userConnected.Moneys - value - int(fraisTransfer))
	userRecepteur.Moneys = (userRecepteur.Moneys + value)
	// to do avadika float32 ny money
	h.DB.Save(userRecepteur)
	h.DB.Save(userConnected)
	moneyTransaction := models.Money{
		ID:         uuid.New(),
		SendBy:     userConnected.UUID,
		SentTo:     userRecepteur.UUID,
		TransResum: message,
		Value:      body.Value,
	}

	result := h.DB.Create(&moneyTransaction)
	if result.Error != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": result.Error})
	}

	ctx.JSON(http.StatusOK, moneyTransaction)
}

func (h handler) GetUserByuuid(userUUID string) (*models.User, error) {
	var users models.User
	result := h.DB.First(&users, "uuid = ?", userUUID)

	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'id %v n'est pas dans %v", userUUID, users)
		return nil, err
	}

	return &users, nil

}
