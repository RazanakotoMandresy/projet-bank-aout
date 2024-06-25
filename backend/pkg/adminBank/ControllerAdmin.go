package adminbank

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct {	
	DB *gorm.DB	
}

func AdminRoutes(router *gin.Engine, db *gorm.DB) {
	h := &handler{
		DB: db,
	}
	routes := router.Group("/admin")
	routes.POST("/", h.CreateAdminAccount)
}
