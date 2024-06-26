package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// models money
type Money struct {
	ID         uuid.UUID `gorm:"id;primarykey"`
	Created_at time.Time
	Updated_at time.Time
	Deleted_at gorm.DeletedAt
	SendBy     string `json:"sentBy"`
	SentTo     string `json:"sentTo"`
	Value      uint    `json:"value"`
	TransResum string `json:"tansResume"`
}