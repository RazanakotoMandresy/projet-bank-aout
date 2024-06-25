package adminbank

import (
	"net/http"
	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type BankAdminReq struct {
	ID         uint32 `gorm:"id;primaryKey"`
	Created_at time.Time
	Updated_at time.Time
	Deleted_at gorm.DeletedAt
	Name       string `json:"name"`
	Passwords  string `json:"passwords"`
}

func (h handler) CreateAdminAccount(ctx *gin.Context) {
	body := BankAdminReq{}
	if err := ctx.Bind(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	passwordHashed := middleware.HashPassword(body.Passwords)
	admin := models.Admin{
		ID:         uuid.New().ID(),
		UUID:       uuid.New(),
		Created_at: time.Now(),
		Updated_at: time.Now(),
		Name:       body.Name,
		Passwords:  passwordHashed,
	}
	if result := h.DB.Create(&admin); result.Error != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"err": result.Error})
		return
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  admin.ID,
		"uuid": admin.UUID,
		"exp":  time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
	tokenString, _ := middleware.TokenManage(token, ctx)
	ctx.JSON(http.StatusOK, gin.H{"admin": admin, "token": tokenString})
}
