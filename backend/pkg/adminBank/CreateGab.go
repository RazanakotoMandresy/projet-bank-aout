package adminbank

import "github.com/gin-gonic/gin"

type GabRequest struct {
	// ny money ao anatin'ilay gab de base , ampitombona sy mihena a chaque fois misy manao depot ou manao retrait
	Money int `json:"money"`
	
}

func (h handler) CreateGab(ctx *gin.Context) {

}
