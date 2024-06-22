package user

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h handler) UpdateInfo(ctx *gin.Context) {
	user, _ := ctx.Get("user")
	fmt.Println("USERRRRR", user)
	ctx.JSON(http.StatusOK, user)
}
