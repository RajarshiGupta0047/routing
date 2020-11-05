import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers:[ServersService]
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  

  constructor(private serversService: ServersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  const id=+this.route.snapshot.params['id'];

    this.server = this.serversService.getServer(id);
    
  }
  onEdit()
  {
    
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
  }

}
