package adminbank

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

type BankReq struct {
	Money uint    `json:"money"`
	Lieux string `json:"lieux"`
}

// code create bank
func (h handler) CreateBank(ctx *gin.Context) {
	uuidAny, _ := ctx.Get("uuid")
	// maka anle uuid avy ao anaty le token ?
	body := new(BankReq)
	// mamadika anle uuidAny ho string
	uuid := fmt.Sprint(uuidAny)
	admin, err := h.GetByuuid(uuid)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"err": err.Error(),
		})
		return
	}
	// code defensif sur le role meme si il est impossible qu'il soit appele satria ny uuid an'i admin ihany ny getevana
	if admin.Role != "admin" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"err": "vous n'avez pas le role necessaire ",
		})
		return
	}

	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"err": err.Error(),
		})
		return
	}

	bank := models.Bank{
		Money: body.Money,
		Lieux: body.Lieux,
	}

	if result := h.DB.Create(&bank); result.Error != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"err": result.Error,
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"result": bank,
	})
}
func (h handler) GetByuuid(adminUUID string) (*models.Admin, error) {
	var admin models.Admin
	result := h.DB.First(&admin, "uuid = ?", adminUUID)
	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'id %v n'est pas dans %v ou bien vous n'etes pas admin", adminUUID, admin)
		return nil, err
	}
	return &admin, nil
}
