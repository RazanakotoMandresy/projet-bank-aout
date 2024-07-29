package user

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

// les trucs que l'user peut modifier
// modifier le mots de passe
// supprimer des auto epargne
type SettingReq struct {
	RemoveAllEp     bool   `json:"rmEpargne"`
	DeleteMyAccount bool   `json:"rmAccount"`
	BlockAccount    string `json:"blockAcc"`
	UnBlockAccount  string `json:"unblockAcc"`
	// rehefa misy inspi tohizana
}

func (h handler) SettingUser(ctx *gin.Context) {
	body := new(SettingReq)
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err})
		return
	}
	uuid, err := middleware.ExtractTokenUUID(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": err.Error()})
		return
	}
	// innutile ngamba
	// user, err := h.GetUserSingleUserFunc(uuid)
	// if err != nil {
	// 	ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"err": err})
	// }
	if body.RemoveAllEp {
		err := removeAllEpFunc(h, uuid)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"err": err.Error()})
			return
		}
	}
	ctx.JSON(http.StatusOK, "ok")
}
func removeAllEpFunc(h handler, uuidUser string) error {
	var epargne models.Epargne
	res := h.DB.Delete(&epargne, "user_uuid = ?", uuidUser)
	if res.Error != nil {
		return res.Error
	}
	return nil
}
