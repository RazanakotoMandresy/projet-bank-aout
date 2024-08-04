package chatrealtime

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

func (h handler) GetMessages(ctx *gin.Context) {
	roomUUID := ctx.Param("roomUUID")
	userUUID, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"roomUUID": roomUUID, "userUUID": userUUID})
}
