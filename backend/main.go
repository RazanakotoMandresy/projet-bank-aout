package main

import (
	"os"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/db"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/money"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/user"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load("./pkg/common/envs/.env")

	port := os.Getenv("PORT")
	dbUrl := os.Getenv("DB_URL")

	router := gin.Default()
	dbHandler := db.Init(dbUrl)
	user.RegisterRoutes(router, dbHandler)
	money.TransactionRoutes(router, dbHandler)
	router.Run(port)
}
