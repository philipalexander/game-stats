import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from './game';


@Injectable()
export class StatsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private statsUrl = 'https://sheetsu.com/apis/v1.0/b833d5abc21f';  // URL to web api
  constructor(private http: Http) { }

  getGames(): Promise<Game[]> {
    return this.http.get(this.statsUrl)
            .toPromise()
            .then(response => response.json() as Game[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // getGame(id: number): Promise<Game> {
  //   return this.getGames()
  //             .then(players => players.find(player => player.id === id));
  // }
  // update(player: Player): Promise<Player> {
  //   const url = `${this.statsUrl}/${player.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(player), {headers: this.headers})
  //     .toPromise()
  //     .then(() => player)
  //     .catch(this.handleError);
  // }

  create(name: string): Promise<Game> {
    return this.http
      .post(this.statsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  //
  // delete(id: number): Promise<void> {
  //   const url = `${this.statsUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
}
