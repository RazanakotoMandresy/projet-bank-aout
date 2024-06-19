package user

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// create User mitovy amin'i register ihany
type CreateUserRequest struct {
	Name              string `json:"name"`
	FirstName         string `json:"firstName"`
	Moneys            int    `json:"money"`
	Numero            int    `json:"numero"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
}



func (h handler) CreateUser(ctx *gin.Context) {
	body := new(CreateUserRequest)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		ctx.JSON(http.StatusBadRequest, err.Error())
		return
	}
	var user models.User
	passwordHashed := hashPassword(body.Password)
	user.Name = body.Name
	user.FirstName = body.FirstName
	user.Numero = body.Numero
	user.Password = passwordHashed
	user.Date_de_naissance = "on donnera un temps quand on aura un front e chois de date"
	user.Residance = body.Residance
	user.Moneys = 0
	user.UUID = uuid.New().String()
	if result := h.DB.Create(&user); result.Error != nil {
		ctx.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	ctx.JSON(http.StatusCreated, &user)
}
