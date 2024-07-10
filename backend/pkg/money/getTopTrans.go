package money

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

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
	ctx.JSON(http.StatusOK, &money)
}
