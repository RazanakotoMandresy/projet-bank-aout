package middleware

import (
	"log"
	"os"
	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/golang-jwt/jwt/v5"
)

var someting = []byte(os.Getenv("SECRET"))

func TokenManage(user models.User) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userUUID":   user.UUID,
		"exp":        time.Now().Add(time.Hour * 24 * 30),
		"authorized": true,
	})

	tokenString, err := token.SignedString(someting)
	if err != nil {
		log.Fatal("Erreur lors de la generation du token", err)
		return ""
	}
	return tokenString
}
