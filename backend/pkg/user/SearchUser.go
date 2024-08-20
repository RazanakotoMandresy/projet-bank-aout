package user

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

func (h handler) SearchUser(ctx *gin.Context) {
	// place de la banque pour le rechercher
	// userName ou uuid ny afaka recherchenau
	users := ctx.Query("user")
	// TODO Regex rehefa misy data
	if users == "" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": "le champ de recherche ne peut pas etre vide"})
		return
	}
	var user []models.User
	if	res := h.DB.Where("app_user_name = ? OR name = ? OR first_name = ?", users, users, users).Find(&user);res.Error != nil {
		ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"err": "l'utilisateur n'existe pas"})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"res": &user})
}
