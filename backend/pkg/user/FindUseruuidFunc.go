package user

import (
	"fmt"

	"github.com/RazanakotoMandresy/bank-app-aout/backend/pkg/common/models"
)

func (h handler) GetUserSingleUserFunc(uuidToFind string) (*models.User, error) {
	var user models.User
	result := h.DB.First(&user, "uuid = ?", uuidToFind)
	if result.Error != nil {
		err := fmt.Errorf("utilisateur avec l'uuid %v n'est pas dans %v , le resultats est %v recherche si c'est un appUserName", uuidToFind, user, result)
		fmt.Println(err)
		res := h.DB.First(&user, "app_user_name = ?", uuidToFind)
		if res.Error != nil {
			return nil, fmt.Errorf(" %v pas dans uuid et AppUserName", uuidToFind)
		}
	}
	return &user, nil
}
