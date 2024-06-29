package user

import (
	"fmt"
	"net/http"
	"strings"

	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"

	"github.com/joho/godotenv"
)

// create User mitovy amin'i register ihany
type UserRequest struct {
	AppUserName       string `json:"AppUserName"`
	Name              string `json:"name"`
	FirstName         string `json:"firstName"`
	Moneys            uint   `json:"money"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
	Email             string `json:"Email"`
}

func (h handler) CreateUser(ctx *gin.Context) {
	godotenv.Load("../common/envs/.env")
	body := new(UserRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		fmt.Println(err)
		return
	}
	passwordHashed := middleware.HashPassword(body.Password)
	user := models.User{
		AppUserName: body.AppUserName,
		Name:        body.Name,
		FirstName:   body.FirstName,

		Password:          passwordHashed,
		Date_de_naissance: "on donnera plus tard",
		Moneys:            0,
		UUID:              uuid.New().String(),
		Residance:         body.Residance,
		Email:             body.Email,
		Created_at:        time.Now(),
		Updated_at:        time.Now(),
		ID:                uuid.New().ID(),
		Role:              "user",
	}

	if result := h.DB.Create(&user); result.Error != nil {
		strErr := result.Error.Error()
		if strings.ContainsAny(strErr, "23505") {
			err := fmt.Sprintf("Problemes de duplication : -%v", strErr)
			ctx.JSON(http.StatusBadRequest, err)
			fmt.Println(err)
			return
		}
		ctx.AbortWithError(http.StatusBadRequest, result.Error)
		ctx.JSON(http.StatusBadRequest, result.Error.Error())
		fmt.Println(result.Error)
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  user.ID,
		"uuid": user.UUID,
		"role": user.Role,
		"exp":  time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
	tokenString, _ := middleware.TokenManage(token, ctx)
	ctx.JSON(http.StatusCreated, gin.H{
		"token": tokenString,
	})
}
