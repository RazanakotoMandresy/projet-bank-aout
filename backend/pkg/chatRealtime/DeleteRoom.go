package chatrealtime

import "github.com/gin-gonic/gin"

func DeleteRoom(ctx *gin.Context) {
	roomUUID := ctx.Param("roomUUID")
	roomManager.deleteBroadCast(roomUUID)
}
