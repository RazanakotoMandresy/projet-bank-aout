package adminbank

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

type BankReq struct {
	Money int    `json:"money"`
	Lieux string `json:"lieux"`
}

func (h handler) CreateBank(ctx *gin.Context) {
	body := new(BankReq)
	uuidAny, _ := ctx.Get("uuid")
	uuid := fmt.Sprint(uuidAny)
	fmt.Println(uuid)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	bank := models.Bank{

		Money: body.Money,
		Lieux: body.Lieux,
	}
	if result := h.DB.Create(&bank); result.Error != nil {

	}
}
