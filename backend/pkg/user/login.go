package user

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

type LoginRequest struct {
	Email    string `json:"Email"`
	Password string `json:"password"`
}

func (h handler) Login(ctx *gin.Context) {
	body := new(LoginRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}
	var users models.User
	email := models.User{Email: body.Email}
	GetPasswordHashed := h.DB.First(&users, email)
	// GetPasswordHashed := h.DB.Find(&users)

	if GetPasswordHashed.Error != nil {
		ctx.JSON(http.StatusInternalServerError, GetPasswordHashed.Error.Error())
		fmt.Println(GetPasswordHashed.Error.Error())
		return
	}
	err := isTruePassword(users.Password, body.Password)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, err.Error())
		return
	}
	tokenString := middleware.TokenManage(users)
	ctx.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)
	res := JsonResCreated{Token: tokenString, UserJson: users}
	ctx.JSON(http.StatusOK, res)
}
