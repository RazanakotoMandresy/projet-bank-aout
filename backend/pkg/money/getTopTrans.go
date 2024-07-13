package money

import (
	"net/http"

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
	userTosendSlicesJsoned := []topTrans{}
	for _, moneys := range money {
		userTosendSlicesJsoned = append(userTosendSlicesJsoned, topTrans{SentTo: moneys.SentTo , ValueTrans: int(moneys.Totals)})
	}
	// json append anle result
	// finally decide to change the send money

	ctx.JSON(http.StatusOK, userTosendSlicesJsoned)
}
