package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID                uint
	Created_at        time.Time
	Updated_at        time.Time
	Deleted_at        gorm.DeletedAt
	UUID              string `gorm:"id;primary_key"`
	Name              string `json:"name"`
	Email             string `gorm:"unique"`
	FirstName         string `json:"firstName"`
	Moneys            int    `json:"money"`
	Numero            uint   `gorm:"unique"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
}
