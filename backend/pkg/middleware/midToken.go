package middleware

import (
	"errors"
	"net/http"

	"os"
	"time"

	// "github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/db"
	// "github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func TokenManage(token *jwt.Token, c *gin.Context) (string, error) {
	// Generate a JWT token
	// token generate Token
	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create token",
		})
		return "", errors.New("failed to create token")
	}

	// Respond
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{})
	return tokenString, nil
}
func RequireAuth(c *gin.Context) {
	tokenString, err := c.Cookie("Authorization")
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}
	token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}

		return []byte(os.Getenv("SECRET")), nil
	})
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatusJSON(http.StatusUnauthorized, "TOKEN Deja expirer")
		}
		// var user models.User
		// var admin models.Admin
		// DB := db.Init(os.Getenv("DB_URL"))
		// DB.First(&user, claims["sub"])
		// DB.First(&admin, claims["sub"])
		// if user.ID == 0 || admin.ID == 0 {
		// 	c.AbortWithStatusJSON(http.StatusUnauthorized, "Pas d'utilisateur avec c'id")
		// }
		c.Set("uuid", claims["uuid"])
		c.Next()
	} else {
		c.AbortWithStatusJSON(http.StatusUnauthorized, "ELSE")
	}
}
