package money

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

// ny uuid anaty params de ny uuid an'i envoyeur
type sendMoneyRequest struct {
	SendBy     string `json:"sentBy"`
	SentTo     string `json:"sentTo"`
	Value      int    `json:"valeurTrans"`
	TransResum string `json:"tansResume"`
}

func (h handler) SendMoney(ctx *gin.Context) {
	uuidConnected, _ := ctx.Get("uuid")
	uuidRecepteur := ctx.Param("uuid")
	uuidConnectedStr := fmt.Sprint(uuidConnected)
	body := new(sendMoneyRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	userConnected, _ := h.getUserByuuid(uuidConnectedStr)
	userRecepteur, _ := h.getUserByuuid(uuidRecepteur)
	ctx.JSON(http.StatusOK, gin.H{"userConnected": userConnected, "userRecepteur": userRecepteur})

}
func (h handler) getUserByuuid(userUUID string) (*models.User, error) {
	var users models.User
	result := h.DB.First(&users, "uuid = ?", userUUID)
	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'id %v n'est pas dans %v", userUUID, users)
		return nil, err
	}
	return &users, nil

}
