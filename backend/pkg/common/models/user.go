package models

import (
	"time"

	"github.com/lib/pq"
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
	Name              string
	Email             string `gorm:"unique"`
	FirstName         string
	Moneys            int
	Password          string
	Date_de_naissance string
	Residance         string
	Role              string
	Image             string
	FamMembers        pq.StringArray `gorm:"type:text[]"`
}
