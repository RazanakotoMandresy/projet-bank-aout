package money

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	// "github.com/google/uuid"
)

// ny uuid anaty params de ny uuid an'i envoyeur
type sendMoneyRequest struct {
	Value int `json:"value"`
}

func (h handler) SendMoney(ctx *gin.Context) {
	// extracttion de l'uuid depuis le bearer
	uuidConnectedStr, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	// uuid du recepteur params dans l'url
	uuidRecepteur := ctx.Param("uuid")
	body := new(sendMoneyRequest)

	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	value := body.Value
	// code si l'on veux envoyer une somme inferieur a 1
	if value < 1 {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": "on ne peut pas envoyer une somme aussi minime"})
		return
	}
	userConnected, _ := h.GetUserByuuid(uuidConnectedStr)
	// maka anle userRecepteur tokony par uuid na par AppUserName
	userRecepteur, err := h.GetUserByuuid(uuidRecepteur)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	// check si l'envoyeur essayent d'envoyer plus d'argent que ce qu'il en a
	if value > userConnected.Moneys {
		err := fmt.Errorf("impossible d'envoyer votre argent %v l'argent que vous voulez envoyer est %v", userConnected.Moneys, value)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	// 	message si tous se passe bien
	// message := fmt.Sprintf("%v a envoye un argent d'un montant de %v a %v", userConnected.AppUserName, value, userRecepteur.AppUserName)
	userConnected.Moneys = userConnected.Moneys - value
	userRecepteur.Moneys = (userRecepteur.Moneys + value)
	// save les money ao anaty user satria ireo tables fatsy uuid simplement ril
	h.DB.Save(userRecepteur)
	h.DB.Save(userConnected)
	// la models ho creena
	var moneyTransaction []models.Money

	// res := h.DB.First(&moneyTransaction, "send_by = ?", uuidConnectedStr, "sent_to = ?", uuidRecepteur)
	// queryString := fmt.Sprintf(`"send_by = ? AND sent_to = ?", "%v" , "%v"`, uuidConnectedStr, uuidRecepteur)

	res := h.DB.Where("send_by = ? AND sent_to = ?",uuidConnectedStr,uuidRecepteur).Find(&moneyTransaction)
	
	if res.Error != nil {
		fmt.Println(res.Error)
	}
	// moneyTransaction.ID = uuid.New()
	// moneyTransaction.SendBy = userConnected.UUID
	// moneyTransaction.SentTo = userRecepteur.UUID
	// moneyTransaction.TransResum = message
	// moneyTransaction.Value = body.Value

	// cretion d'une nouvel  raw tokony manao find ao ra efa misy transaction izy mtsam de tsy mila micree fa manao
	// result := h.DB.Create(&moneyTransaction)
	// if result.Error != nil {
	// 	ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": result.Error.Error()})
	// 	return
	// }

	ctx.JSON(http.StatusOK, &moneyTransaction)
}

// user req que se soit uuid na appUserName
func (h handler) GetUserByuuid(userReq string) (*models.User, error) {
	var users models.User
	result := h.DB.First(&users, "uuid = ?", userReq)
	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'uuid %v n'est pas dans %v , le resultats est %v recherche si c'est un appUserName", userReq, users, result)
		fmt.Println(err)
		res := h.DB.First(&users, "app_user_name = ?", userReq)
		if res.Error != nil {
			return nil, errors.New("user pas dans uuid et AppUserName")
		}
	}
	return &users, nil
}
