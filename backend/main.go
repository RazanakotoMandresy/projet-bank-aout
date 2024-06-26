package main

import (
	"os"

	adminbank "github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/adminBank"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/db"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/money"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/user"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	router := gin.Default()
	gin.SetMode(gin.DebugMode)
	router.Use(CORSMiddleware())
	godotenv.Load("./pkg/common/envs/.env")
	port := os.Getenv("PORT")
	dbUrl := os.Getenv("DB_URL")
	dbHandler := db.Init(dbUrl)

	user.RegisterRoutes(router, dbHandler)
	money.TransactionRoutes(router, dbHandler)
	adminbank.AdminRoutes(router, dbHandler)
	router.Run(port)
}
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
