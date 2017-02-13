import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { StatsService } from './stats.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  // templateUrl: 'app.component.html',
  templateUrl: './dashboard.component.html',
  styleUrls: ['app.component.css']
})

export class DashboardComponent implements OnInit {
  games: Game[] = [];
  constructor(private statsService: StatsService) { }

  getGames(): void {
    this.statsService.getGames().then(games => this.games = games);
  }

  testme(): void {
    var game = {
      'id': 10,
      'game': 'foos',
      'players': 'Bob, Bill',
      'winner': 'Bob',
      'winnerScore': 5,
      'loserScore': 4
    };
    this.add(game);
  }

  add(newGame): void {
    console.log("add me", newGame);
    if (!newGame) { return; }
    this.statsService.create(newGame)
      .then(game => {
        this.games.push(game);
        // this.selectedHero = null;
      });
  }

  ngOnInit(): void {
    this.getGames();
  }
}
