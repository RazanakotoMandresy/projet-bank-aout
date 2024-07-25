package realtimenotification

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		// Allow all connections
		return true
	},
}

type Message struct {
	Username string `json:"username"`
	Text     string `json:"text"`
}

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan Message)

func GetNotif(c *gin.Context) {
	fmt.Println("getNotif_-----------------------")
		conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}
		clients[conn] = true
		go handleWebSocketConnection(conn)
}
func handleWebSocketConnection(conn *websocket.Conn) {
	for {
		var message Message
		err := conn.ReadJSON(&message)
		if err != nil {
			conn.Close()
			delete(clients, conn)
			fmt.Println("close*---------")
			break
		}
		broadcast <- message
	}
}
func HandleBroadcast() {
	for {
		message := <-broadcast
		for client := range clients {
			err := client.WriteJSON(message)
			if err != nil {
				client.Close()
				delete(clients, client)
			}
		}
	}
}
