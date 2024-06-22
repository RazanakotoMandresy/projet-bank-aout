package user

import (
	"fmt"
	"net/http"
	"strings"

	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"github.com/joho/godotenv"
)

// create User mitovy amin'i register ihany
type UserRequest struct {
	AppUserName       string `json:"AppUserName"`
	Name              string `json:"name"`
	FirstName         string `json:"firstName"`
	Moneys            uint   `json:"money"`
	Numero            uint   `json:"Numero"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
	Email             string `json:"Email"`
}

type JsonResCreated struct {
	Token    string      `json:"token"`
	UserJson models.User `json:"user"`
}

func (h handler) CreateUser(ctx *gin.Context) {
	godotenv.Load("../common/envs/.env")
	body := new(UserRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		ctx.JSON(http.StatusBadRequest, err.Error())
		return
	}
	passwordHashed := hashPassword(body.Password)

	if body.Name == "" || body.FirstName == "" || body.Date_de_naissance == "" || body.Residance == "" {
		ctx.JSON(http.StatusBadRequest, "vous devez remplier tous les champs")
		return
	}
	user := models.User{
		AppUserName:       body.AppUserName,
		Name:              body.Name,
		FirstName:         body.FirstName,
		Numero:            body.Numero,
		Password:          passwordHashed,
		Date_de_naissance: "on donnera plus tard",
		Moneys:            0,
		UUID:              uuid.New().String(),
		Residance:         body.Residance,
		Email:             body.Email,
		Created_at:        time.Now(),
		Updated_at:        time.Now(),
		ID:                uuid.New().ID(),
	}

	if result := h.DB.Create(&user); result.Error != nil {
		strErr := result.Error.Error()
		if strings.ContainsAny(strErr, "23505") {
			err := fmt.Sprintf("Problemes de duplication : -%v", strErr)
			ctx.JSON(http.StatusBadRequest, err)
			return
		}
		ctx.AbortWithError(http.StatusBadRequest, result.Error)
		ctx.JSON(http.StatusBadRequest, result.Error.Error())
		return
	}
	tokenString, _ := middleware.TokenManage(user, ctx)
	ctx.JSON(http.StatusCreated, gin.H{"token": tokenString, "users": user})
}
