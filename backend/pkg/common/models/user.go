package models

import (
	"time"

	"gorm.io/gorm"
)
// modles user
type User struct {
	ID                uint32 `gorm:"id;primarykey"`
	Created_at        time.Time
	Updated_at        time.Time
	UUID              string `gorm:"uuid"`
	Deleted_at        gorm.DeletedAt
	AppUserName       string `gorm:"unique"`
	Name              string `json:"name"`
	Email             string `gorm:"unique"`
	FirstName         string `json:"firstName"`
	Moneys            uint    `json:"money"`
	Password          string `json:"password"`
	Date_de_naissance string `json:"naissance"`
	Residance         string `json:"residance"`
	Role              string `json:"role"`
}
