import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Play } from './play.models';
import { Router } from '@angular/router';
import { Actor } from '../actors/actor.models';
import { ActorService } from '../actors/actor.service';
import { Producer } from '../Producer/producer.models';
import { Theater } from '../theaterInfo/theater.models';


@Component({
  selector: 'app-play-add',
  templateUrl: './play-add.component.html',
  styleUrls: ['play-addSheet.css']
})
export class PlayAddComponent {

  public play: Play = <Play>{};
  public actors: Actor[];
  public producers: Producer[];
  public theaters: Theater[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
    this.loadActor();
    this.loadProducer();
    this.loadTheater();
  }
  public savePlay() {
    this.http.post(this.baseUrl + 'api/plays', this.play).subscribe(result => {
      this.router.navigateByUrl("/plays");
    }, error => console.error(error));
  }

  loadActor() {
    this.http.get<Actor[]>(this.baseUrl + 'api/actors').subscribe(result => {
      this.actors = result;
    }, error => console.error(error));
  }

  loadProducer() {
    this.http.get<Producer[]>(this.baseUrl + 'api/producers').subscribe(result => {
      this.producers = result;
    }, error => console.error(error));
  }

  loadTheater() {
    this.http.get<Theater[]>(this.baseUrl + 'api/theaters').subscribe(result => {
      this.theaters = result;
    }, error => console.error(error));
  }
  

}
