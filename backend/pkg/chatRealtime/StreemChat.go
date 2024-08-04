package chatrealtime

import (
	"io"

	"github.com/gin-gonic/gin"
)

func Stream(ctx *gin.Context) {
	roomUUID := ctx.Param("roomUUID")
	listener := roomManager.OpenListener(roomUUID)
	defer roomManager.CloseListenner(roomUUID, listener)
	clientGone := ctx.Request.Context().Done()
	ctx.Stream(func(w io.Writer) bool {
		select {
		case <-clientGone:
			return false
		case message := <-listener:
			ctx.SSEvent("message", message)
			return true
		}
	})
}
