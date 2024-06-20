package user

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)
func hashPassword(password string) string {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 5)
	if err != nil {
		fmt.Printf("Erreur lors du cryptage du mots de passe : %v \n", err)
		return ""
	}
	return string(bytes)
}
func isTruePassword(hashedPassword, password string) string {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	if err != nil {
		fmt.Printf("mauvais mots de passes %v", err)
		return "Mauvais mots de passes"
	}
	return ""
}