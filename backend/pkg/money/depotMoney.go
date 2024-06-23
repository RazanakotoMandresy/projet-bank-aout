package money

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type DepoReq struct {
	Value int `json:"value"`
}

func (h handler) Depot(ctx *gin.Context) {
	userTosendUUid := ctx.Param("uuid")
	body := new(DepoReq)
	userTosend, err := h.GetUserByuuid(userTosendUUid)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	if err := ctx.BindJSON(&body); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	userTosend.Moneys = (userTosend.Moneys + body.Value)
	// To do demain manao compte pour cashPoint any amin'i admin ihany ny afaka manamboatra azy
	// manomboka appli web , miditra moramora anaty expo amzay
	h.DB.Save(userTosend)
}
