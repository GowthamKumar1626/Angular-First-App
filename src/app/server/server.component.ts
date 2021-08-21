import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  serverName: string = '';
  allowNewServer = false;
  serverCreated = false;
  serverStatus = 'offline';

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
