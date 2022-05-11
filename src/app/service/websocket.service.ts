import {Injectable}   from '@angular/core';

const WEBSOCKET_URL = 'ws://localhost:8081/SpringMVC/websocket';

@Injectable()
export class WebSocketService {

  websocket: WebSocket;

  constructor() { }

  createNew(): WebSocket {
    this.websocket = new WebSocket(WEBSOCKET_URL);
    
    return this.websocket;
  }
  
}