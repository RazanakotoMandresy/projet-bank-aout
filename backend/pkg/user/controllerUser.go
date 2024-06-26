package user

import (
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct {
	DB *gorm.DB
}

func RegisterRoutes(router *gin.Engine, db *gorm.DB) {
	h := &handler{
		DB: db,
	}
	routes := router.Group("/user")
	routes.POST("/register", h.CreateUser)
	routes.POST("/login", h.Login)
	routes.PATCH("/:uuid", middleware.RequireAuth, h.UpdateInfo)
	routes.GET("/", h.GetUsers)
}
