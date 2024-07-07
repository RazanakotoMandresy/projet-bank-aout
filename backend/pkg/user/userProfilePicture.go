package user

import (
	"fmt"
	"math/rand"
	"net/http"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
)

func (h handler) UserPP(ctx *gin.Context) {
	file, err := ctx.FormFile("filePP")
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, err.Error())
		return
	}
	splitedName := strings.Split(file.Filename, ".")
	// rename le nom pour qu'il soit unique
	fileName := filepath.Base(splitedName[0] + fmt.Sprint(rand.Uint64()) + "." + splitedName[1])
	// destinantion
	destFile := fmt.Sprintf("upload/%v", fileName)
	if err := ctx.SaveUploadedFile(file, destFile); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	ctx.JSON(http.StatusCreated, gin.H{"file": fileName})
}
