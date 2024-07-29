package user

import (
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

type SettingReq struct {
	RemoveAllEp     bool   `json:"rmEpargne"`
	DeleteMyAccount bool   `json:"rmAccount"`
	BlockAccount    string `json:"blockAcc"`
	UnBlockAccount  string `json:"unblockAcc"`
	// miandry inspi block unblock
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
	user, err := h.GetUserSingleUserFunc(uuid)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"err": err.Error()})
		return
	}
	if body.RemoveAllEp {
		err := removeAllEpFunc(h, user.UUID)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"err": err.Error()})
			return
		}
	}
	if body.DeleteMyAccount {
		err := deleMyAccount(h, user)
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

func deleMyAccount(h handler, user *models.User) error {
	res := h.DB.Delete(user, "uuid = ?", user.UUID)
	if res.Error != nil {
		return res.Error
	}
	return nil
}
