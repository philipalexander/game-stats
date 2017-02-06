import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { StatsService } from './stats.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  // templateUrl: 'app.component.html',
  template: `
  <h3>My Dashboard</h3>
  <div class="grid grid-pad">
    <a *ngFor="let player of players" class="col-1-4">
      <div class="module player">
        <h4>{{player.name}}</h4>
        {{player.points}}
      </div>
    </a>
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
