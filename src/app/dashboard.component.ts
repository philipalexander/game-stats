import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { StatsService } from './stats.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  // templateUrl: 'app.component.html',
  template: `
  <h3>Games</h3>
  <div class="grid grid-pad">
    <table>
    	<thead>
    		<tr>
    			<th>Game ID</th>
    			<th>Game Type</th>
    			<th>Player(s)</th>
    			<th>Winner</th>
          <th>Loser</th>
          <th>Winner Score</th>
          <th>Loser Score</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr *ngFor="let game of games">
    			<td>{{game.id}}</td>
    			<td>{{game.game}}</td>
    			<td>{{game.players}}</td>
    			<td>{{game.winner}}</td>
        	<td>{{game.loser}}</td>
          <td>{{game.winnerScore}}</td>
        	<td>{{game.loserScore}}</td>
    		</tr>
    	</tbody>
    </table>

  </div>
   `,
  styleUrls: ['app.component.css']
})

export class DashboardComponent implements OnInit {
  games: Game[] = [];
  constructor(private statsService: StatsService) { }

  getGames(): void {
    this.statsService.getGames().then(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }
}
