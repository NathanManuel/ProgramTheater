import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Theater } from './theater.models';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public loadTheaters() {
    return this.http.get<Theater[]>(this.baseUrl + 'api/theaters');
  }

  public deleteTheater(theater: Theater) {
    return this.http.delete(this.baseUrl + 'api/theaters/' + theater.id);
  }

}
