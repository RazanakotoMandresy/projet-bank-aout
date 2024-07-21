package userfam

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

// pour plus d;agiliter dans le backend je vais cree une nouvelle models misy:
// appartient a  : uuid anle tompony (ilay mpandefa vola)
// plafond nomen'i tompony azy tsy afaka mihotra azy type : int

type createFamRequest struct {
	FullName string
	MainAccount
}

func (h handler) AddUserFam(ctx *gin.Context) {
	body := new(createFamRequest)
	userConnectedUUID, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": err.Error()})
		return
	}
	// getTheUser
	fmt.Println(userConnectedUUID)
}
