package chatrealtime

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var roomManager *Manager

type handler struct {
	DB *gorm.DB
}


func ChatController(router *gin.Engine, db *gorm.DB) {
	roomManager = NewRoomManager()
	h := &handler{
		DB: db,
	}
	routes := router.Group("/api/v1/chat")
	routes.GET("/getAll/uuid", h.GetMessages)
	routes.POST("/send/uuid", h.SendMessage)
}
