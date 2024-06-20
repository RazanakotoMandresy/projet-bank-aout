package user

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// create User mitovy amin'i register ihany
type CreateUserRequest struct {
	Name              string `json:"name"`
	FirstName         string `json:"firstName"`
	Moneys            uint   `json:"money"`
	Numero            uint   `json:"Numero"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
	Email             string `json:"Email"`
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
	user.UUID = uuid.NewString()
	user.Email = body.Email
	user.Created_at = time.Now()
	user.Updated_at = time.Now()
	user.ID = uint(rand.Uint32())
	if body.Name == "" || body.FirstName == "" || body.Date_de_naissance == "" || body.Residance == "" {
		ctx.JSON(http.StatusBadRequest, "vous devez remplier tous les champs")
		return
	}
	if result := h.DB.Create(&user); result.Error != nil {
		if result.Error.Error() == "ERROR: duplicate key value violates unique constraint \"uni_users_numero\" (SQLSTATE 23505)" {
			err := fmt.Sprintf("le numero %v est deja utiliser par un autres comptes ", body.Numero)
			ctx.JSON(http.StatusBadRequest, err)
			return
		}
		ctx.AbortWithError(http.StatusNotFound, result.Error)
		ctx.JSON(http.StatusBadRequest, result.Error)
		return
	}

	ctx.JSON(http.StatusCreated, &user)
}
