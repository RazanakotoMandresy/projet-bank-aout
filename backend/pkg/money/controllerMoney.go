package money

import (
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// models money
type handler struct {
	DB *gorm.DB
}

func TransactionRoutes(router *gin.Engine, db *gorm.DB) {
	h := &handler{
		DB: db,
	}
	routes := router.Group("/transaction")
	routes.PUT("/depot/:uuid", h.Depot)
	routes.PUT("/retrait/:uuid", h.Retrait)
	routes.POST("/:uuid", middleware.RequireAuth, h.SendMoney)
}
