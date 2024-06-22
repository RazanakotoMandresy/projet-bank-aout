package middleware

import (
	"errors"
	"fmt"
	"net/http"

	"os"
	"time"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/db"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func TokenManage(user models.User, c *gin.Context) (string, error) {
	// Generate a JWT token

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

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
	// Get the cookie off the

	tokenString, err := c.Cookie("Authorization")
	fmt.Println("TOKEN STRINGGG", tokenString)

	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	// Decode/validate it
	token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(os.Getenv("SECRET")), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// Chec k the expiry date
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatusJSON(http.StatusUnauthorized, "IDK MAN")
		}
		// Find the user with token Subject
		var user models.User
		//  initializers.DB.First(&user,claims["sub"])
		DB := db.Init(os.Getenv("DB_URL"))
		// var DB *gorm.DB
		DB.Find(&user, claims["sub"])
		if user.ID == 0 {
			c.AbortWithStatusJSON(http.StatusUnauthorized, "ID 0")
		}
		// Attach the request
		c.Set("user", user)
		//Continue
		c.Next()
	} else {
		c.AbortWithStatusJSON(http.StatusUnauthorized, "ELSE")
	}
}
