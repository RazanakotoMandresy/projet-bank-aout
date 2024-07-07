package money

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// ny uuid anaty params de ny uuid an'i envoyeur
type sendMoneyRequest struct {
	Value uint `json:"value"`
}

func (h handler) SendMoney(ctx *gin.Context) {
	uuidConnectedStr, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	uuidRecepteur := ctx.Param("uuid")
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
	userConnected.Moneys = (userConnected.Moneys - value - uint(fraisTransfer))
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

// try to getBy App userName ou uuid , si userName tsy  mila manao uuid su uuid tsy mila manao appUserName
func (h handler) GetUserByuuid(userUUID string) (*models.User, error) {
	var users models.User
	result := h.DB.First(&users, "uuid = ?", userUUID)
	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'id %v n'est pas dans %v , le resultats est %v", userUUID, users, result)
		return nil, err
	}
	return &users, nil

}
