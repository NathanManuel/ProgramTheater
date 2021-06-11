import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actor } from './actor.models';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public loadActors() {
    return this.http.get<Actor[]>(this.baseUrl + 'api/actors');
  }

  public deleteActor(theater: Actor) {
    return this.http.delete(this.baseUrl + 'api/actors/' + theater.id);
  }

}
