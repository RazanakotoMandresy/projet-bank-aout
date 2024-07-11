package money

import (
	"fmt"
	"net/http"
	"slices"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

type topTrans struct {
	SentTo     string `json:"sentTo"`
	ValueTrans int    `json:"sommeTrans"`
}

func (h handler) GetTopTrans(ctx *gin.Context) {
	uuid, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	var money []models.Money
	result := h.DB.Find(&money, "send_by = ?", uuid)
	if result.Error != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"err": result.Error})
		return
	}
	// json append anle result
	userTosendSlicesJsoned := []topTrans{}
	usersTosendNameSLice := []string{}
	// range models money
	for _, moneys := range money {
		// mi ajoute anle uuid sentTo anaty slice amzay afaka filtrena apres
		usersTosendNameSLice = append(usersTosendNameSLice, moneys.SentTo)
		// fmt.Println(usersTosendNameSLice)
		// filtre du slice

	}

	userToSendFilterdSlice := slices.Compact(usersTosendNameSLice)
	for _, userName  := range userToSendFilterdSlice{
		userTosendSlicesJsoned = append(userTosendSlicesJsoned, topTrans{SentTo: userName, ValueTrans: 1})
		fmt.Println(userTosendSlicesJsoned)
	}

	ctx.JSON(http.StatusOK, userToSendFilterdSlice)
}
