package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UUID              string `gorm:"uuid;primary_key"`
	Name              string `json:"name"`
	FirstName         string `json:"firstName"`
	Moneys            int    `json:"money"`
	Numero            int    `gorm:"unique"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
}
