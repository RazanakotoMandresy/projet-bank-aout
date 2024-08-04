package chatrealtime

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

type SendMessageReq struct {
	Text string `json:"content"`
}

func (h handler) SendMessage(ctx *gin.Context) {
	roomUUID := ctx.Param("roomUUID")
	userUUID, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": err.Error()})
		return
	}
	body := new(SendMessageReq)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	text := body.Text
	if text == "" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": "les champ ne peuvent pas etres vides"})
		return
	}
	roomManager.Submit(userUUID, roomUUID, text)
}
