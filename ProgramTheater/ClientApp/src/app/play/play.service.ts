import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actor } from '../actors/actor.models';
import { Producer } from '../Producer/producer.models';
import { Theater } from '../theaterInfo/theater.models';
import { Play } from './play.models';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
 
  }

  public loadPlays() {
    return this.http.get<Play[]>(this.baseUrl + 'api/plays');
  }

  public deletePlay(theater: Play) {
    return this.http.delete(this.baseUrl + 'api/plays/' + theater.id);
  }
  loadActors() {
    return this.http.get<Actor[]>(this.baseUrl + 'api/actors');
  }
  loadProducers() {
    return this.http.get<Producer[]>(this.baseUrl + 'api/producers');
  }

  loadTheaters() {
    return this.http.get<Theater[]>(this.baseUrl + 'api/theaters');
  }
}
