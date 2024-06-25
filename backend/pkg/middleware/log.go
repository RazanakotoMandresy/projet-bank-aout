package middleware

import (
	"errors"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) string {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 5)
	if err != nil {
		fmt.Printf("Erreur lors du cryptage du mots de passe : %v \n", err)
		return ""
	}
	return string(bytes)
}
func IsTruePassword(hashedPassword, password string) error {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	if err != nil {
		fmt.Printf("mauvais mots de passes %v", err)
		return errors.New("mauvais mots de passes")
	}
	return nil
}
