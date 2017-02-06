import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { StatsService } from './stats.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  // templateUrl: 'app.component.html',
  template: `<h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>

   <ul class="players">
         <li *ngFor="let player of players"
           [class.selected]="player === selectedPlayer"
           (click)="onSelect(player)">
           <span class="badge">{{player.id}}</span>
           {{player.name}}
           {{player.points}}
           {{player.gamesWon}}
           {{player.gamesLost}}
         </li>
       </ul>
       <div *ngIf="selectedPlayer">
         <h2>{{selectedPlayer.name}} details!</h2>
         <div><label>id: </label>{{selectedPlayer.id}}</div>
         <div>
           <label>name: </label>
           <input [(ngModel)]="selectedPlayer.name" placeholder="name"/>
         </div>
       </div>
   `,
  styleUrls: ['app.component.css']
})

export class DashboardComponent implements OnInit {
  players: Player[] = [];
  constructor(private statsService: StatsService) { }

  getPlayers(): void {
    this.statsService.getPlayers().then(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }
}
