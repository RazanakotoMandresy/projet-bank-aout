package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h handler) SearchUser(ctx *gin.Context) {

	// 	uuid, err := middleware.ExtractTokenUUID(ctx)
	// 	if err != nil {
	// 		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": err.Error()})
	// 		return
	// 	}
	// place de la banque pour le rechercher
	// userName ou uuid ny afaka recherchenau
	users := ctx.Query("user")
	if users == "" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": "le champ de recherche ne peut pas etre vide"})
		return
	}
	user, err := h.GetUserSingleUserFunc(users)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"err": "l'utilisateur n'existe pas"})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"res": &user})
}
