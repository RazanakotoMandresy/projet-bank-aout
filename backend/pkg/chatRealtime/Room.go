package chatrealtime

import "github.com/dustin/go-broadcast"

type Listener struct {
	RoomUUID string
	Chan     chan interface{}
}
type Message struct {
	UserUUID string
	RoomUUID string
	Text     string
}
type Manager struct {
	roomChannels map[string]broadcast.Broadcaster
	open         chan *Listener
	close        chan *Listener
	delete       chan *string
	messages     chan *Message
}

func NewRoomManager() *Manager {
	manager := &Manager{
		roomChannels: make(map[string]broadcast.Broadcaster),
		open:         make(chan *Listener, 100),
		close:        make(chan *Listener, 100),
		delete:       make(chan *string, 100),
		messages:     make(chan *Message, 100),
	}
	go manager.run()
	return manager
}
func (m *Manager) run() {
	for {
		select {
		case listener := <-m.open:
			m.register(listener)
		case listener := <-m.close:
			m.derigster(listener)
		case roomUUID := <-m.delete:
			m.deleteBroadCast(*roomUUID)
		case message := <-m.messages:
			m.room(message.RoomUUID).Submit(message.UserUUID + ": " + message.Text)
		}
	}
}
func (m *Manager) register(listener *Listener) {
	m.room(listener.RoomUUID).Register(listener.Chan)
}
func (m *Manager) derigster(listenr *Listener) {
	m.room(listenr.RoomUUID).Unregister(listenr.Chan)
	close(listenr.Chan)
}

// lasa *sting au lieux de string idk why ?
func (m *Manager) deleteBroadCast(roomUUID string) {
	b, ok := m.roomChannels[roomUUID]
	if ok {
		b.Close()
		delete(m.roomChannels, roomUUID)
	}
}
func (m *Manager) room(roomUUID string) broadcast.Broadcaster {
	b, ok := m.roomChannels[roomUUID]
	if !ok {
		b = broadcast.NewBroadcaster(10)
		m.roomChannels[roomUUID] = b
	}
	return b
}
func (m *Manager) OpenListener(roomUUID string) chan interface{} {
	listener := make(chan interface{})
	m.open <- &Listener{
		RoomUUID: roomUUID,
		Chan:     listener,
	}
	return listener
}
func (m *Manager) DeleteBroadCast(roomUUID string) {
	m.delete <- &roomUUID
}
func (m *Manager) CloseListenner(roomUUID string, channel chan interface{}) {
	m.close <- &Listener{
		RoomUUID: roomUUID,
		Chan:     channel,
	}
}
func (m *Manager) Submit(userUUID, roomUUID, text string) {
	msg := &Message{
		UserUUID: userUUID,
		RoomUUID: roomUUID,
		Text:     text,
	}
	m.messages <- msg
}
