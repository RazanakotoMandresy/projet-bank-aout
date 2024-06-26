package user

import (
	// "fmt"
	"fmt"
	"net/http"
	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

type LoginRequest struct {
	Email    string `json:"Email"`
	Password string `json:"password"`
}

func (h handler) Login(ctx *gin.Context) {
	body := new(LoginRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		fmt.Println( "1" ,err.Error())
		return
	}
	var users models.User
	email := models.User{Email: body.Email}
	GetPasswordHashed := h.DB.First(&users, email)

	if GetPasswordHashed.Error != nil {
		ctx.JSON(http.StatusInternalServerError, GetPasswordHashed.Error.Error())
		fmt.Println("2",GetPasswordHashed.Error)
		return
	}
	err := middleware.IsTruePassword(users.Password, body.Password)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, err.Error())
		fmt.Println("3",err.Error())
		return
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  users.ID,
		"uuid": users.UUID,
		"exp":  time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
	tokenString, _ := middleware.TokenManage(token, ctx)
	ctx.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)
	// res := JsonResCreated{Token: tokenString, UserJson: users}
	ctx.JSON(http.StatusOK, gin.H{
		"token": tokenString,
	})
}
