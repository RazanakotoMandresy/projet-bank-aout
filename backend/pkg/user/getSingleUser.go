package user

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h handler) getUser(ctx *gin.Context) {
	userParam := ctx.Param("user")
	users, err := h.GetUserSingleUserFunc(userParam)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"uuid":          users.UUID,
		"image":         users.Image,
		"Email":         users.Email,
		"nameFirstName": fmt.Sprint(users.Name, " ", users.FirstName),
		"AppUserName":   users.AppUserName,
	})
}
