import Peer from 'peerjs';

type EventMessage = {
  event: string,
  data: any
}

class PeerController {
  private peer?: Peer;
  private conection?: Peer.DataConnection;
  private listeners : any = {};
  private peers: Peer.DataConnection [] = []

  private onConnection (conn: Peer.DataConnection) {
    conn.on('data', (payload) => {
      const eventFunctions = this.listeners[payload.event];
      
      if (eventFunctions) {
        for (let func of eventFunctions) {
          func(payload.data);
        }
      }
    });
  }

  create() : Promise<string> {
    const peer = new Peer();
    this.peer = peer;

    peer.on('connection', (conn) => {
      this.peers.push(conn);
      console.log('<< new coonection')
      this.onConnection(conn);
    });

    return new Promise(resolve => {
      peer.on('open', () => {
        resolve(peer.id)
      })
    })
  }

  connect (id: string): Promise<void> {
    if (!this.peer) throw new Error('Peer not exists.');
    const conn = this.peer.connect(id);
    this.conection = conn;

    return new Promise(resolve => {
      conn.on('open', () => {
        this.onConnection(conn);
        resolve()
      })
    })
  }

  send (msg : EventMessage) {
    if (this.peers.length === 0) {
      this.conection?.send(msg);
    } else {
      for (let conn of this.peers) {
        conn.send(msg);
      }
    }
  }

  addListener (event: string, func: Function) {
    if (!this.listeners[event])
      this.listeners[event] = []

    this.listeners[event].push(func);
  }

  removeListener (func: Function) {
    for (let key in this.listeners) {
      const res = this.listeners[key].indexOf(func);
      if (res) this.listeners[key].splice(res, 1); 
    }
  }
}

export default new PeerController();