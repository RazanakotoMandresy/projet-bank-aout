package user

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

func (h handler) getUser(ctx *gin.Context) {
	userParam := ctx.Param("user")
	var users models.User
	// get by uuid or appUserName
	result := h.DB.First(&users, "uuid = ?", userParam)
	if result.Error != nil {
		msg := fmt.Sprintf("%v n'est pas dans uuid rechervhe dans app_user_name ...", userParam)
		fmt.Println(msg)
		res := h.DB.First(&users, "app_user_name = ?", userParam)
		if res.Error != nil {
			err := fmt.Sprintf("aucun utilisateur avec %v dans uuid et AppUserName", userParam)
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
			return
		}
	}
	ctx.JSON(http.StatusOK, gin.H{"uuid": users.UUID, "image": users.Image, "Email": users.Email, "nameFirstName": fmt.Sprint(users.Name, " ", users.FirstName)})
}
