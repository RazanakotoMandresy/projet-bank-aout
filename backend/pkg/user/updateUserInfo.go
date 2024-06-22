package user

import (
	"errors"
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
	// update info rehefa mijery profileska misy diso ou somthing , manova pseudo numero, ny vola ao aminao ao ihany
	uuidAny, _ := ctx.Get("uuid")
	uuidParams := ctx.Param("uuid")
	body := new(UpdateRequest)
	uuid := fmt.Sprint(uuidAny)
	if uuid == uuidParams {
		var user models.User
		result := h.DB.First(&user)
		fmt.Println(user)
		if result.Error != nil {
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, result.Error.Error())
			return
		}
		if err := ctx.BindJSON(&body); err != nil {
			ctx.AbortWithError(http.StatusBadRequest, err)
			ctx.JSON(http.StatusBadRequest, err.Error())
			return
		}
		user.AppUserName = body.AppUserName
		user.Numero = body.Numero
		user.Residance = body.Residance
		h.DB.Save(user)
		ctx.JSON(http.StatusOK, &user)
		return
	}
	fmt.Println("uuidJWT", uuid)
	fmt.Println("uuidPar", uuidParams)
	err := fmt.Sprintf("uuidJWT : %v , uuidPar %v", uuid, uuidParams)
	ctx.AbortWithStatusJSON(http.StatusBadRequest, errors.New(err).Error())

}
