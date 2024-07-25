package realtimenotification

import "github.com/gin-gonic/gin"

func NotifTransaction(router *gin.Engine) {
	routes := router.Group("/api/v1/notif")
	routes.GET("/getNotif", GetNotif)
}
