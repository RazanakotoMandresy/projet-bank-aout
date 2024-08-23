package models

import (
	"time"

	"github.com/google/uuid"
)

type Chat struct {
	ID         uuid.UUID `gorm:"id;primaryKey"`
	Created_at time.Time
	Updated_at time.Time
	SendBy     string
	SentTo     string
}
