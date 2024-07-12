package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
	pq "github.com/lib/pq"
)

// models money
type Money struct {
	ID            uuid.UUID `gorm:"id;primarykey"`
	Totals        int32       `json:"totals"`
	MoneyTransite pq.Int32Array `gorm:"type:integer[]"`
	Created_at    time.Time
	Updated_at    time.Time
	Deleted_at    gorm.DeletedAt
	SendBy        string   `json:"sentBy"`
	SentTo        string   `json:"sentTo"`
	Resume        string   `json:"resume"`
	TransResum    pq.StringArray `gorm:"type:text[]"`
}
