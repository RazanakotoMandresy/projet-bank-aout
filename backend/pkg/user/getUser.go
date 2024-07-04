package user

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

// get user by uuid de manome ny nom
func (h handler) getUser(ctx *gin.Context) {
	uuidAny, _ := ctx.Get("uuid")
	uuid := fmt.Sprint(uuidAny)
	fmt.Println("uuid", uuid)
	var user models.User
	result := h.DB.First(&user, "uuid = ?", uuid)
	if result.Error != nil {
		err := fmt.Sprintf("aucun utilisateur var l'uuid %v n'existes pas", uuid)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err, "err2": result.Error})
		return
	}
	ctx.JSON(http.StatusOK, &user)
}
