package user

import (
	"fmt"
	"net/http"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
	"github.com/gin-gonic/gin"
)

type UpdateRequest struct {
	AppUserName string `json:"AppUserName"`
	Numero      uint   `json:"Numero"`
	Residance   string `json:"residance"`
}

func (h handler) UpdateInfo(ctx *gin.Context) {
	uuidAny, _ := ctx.Get("uuid")
	uuidParams := ctx.Param("uuid")
	body := new(UpdateRequest)
	uuid := fmt.Sprint(uuidAny)
	if uuid == uuidParams {
		var user models.User
		result := h.DB.First(&user)
		if result.Error != nil {
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, result.Error.Error())
			return
		}
		if err := ctx.BindJSON(&body); err != nil {
			ctx.AbortWithError(http.StatusBadRequest, err)
			ctx.JSON(http.StatusBadRequest, err.Error())
			return
		}
		switch {
		case body.AppUserName == "":
			body.AppUserName = user.AppUserName
		default:
			user.AppUserName = body.AppUserName
		}
		switch {
		case body.Residance == "":
			body.Residance = user.Residance
		default:
			user.Residance = body.Residance
		}
		h.DB.Save(user)

		ctx.JSON(http.StatusOK, &user)
		return
	}
	ctx.AbortWithStatusJSON(http.StatusBadRequest, "ceci c'est pas votre compte")
}
