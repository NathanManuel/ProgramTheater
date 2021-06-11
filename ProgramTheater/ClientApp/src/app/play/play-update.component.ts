import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Play } from './play.models';
import { Actor } from '../actors/actor.models';
import { Producer } from '../Producer/producer.models';
import { Theater } from '../theaterInfo/theater.models';

@Component({
  selector: 'app-play-update',
  templateUrl: './play-update.component.html',

})
export class PlayUpdateComponent implements OnInit {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loadActor();
    this.loadProducer();
  }

  public id: string;
  public play: Play = <Play>{};
  public actors: Actor[];
  public producers: Producer[];
  public theaters: Theater[];

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadPlays();
      this.loadActor();
      this.loadTheater();
    });

  }

  public loadPlays() {
    this.http.get<Play>(this.baseUrl + 'api/plays/' + this.id).subscribe(result => {
      this.play = result;
    }, error => console.error(error))
  }

  public updatePlay() {
    this.http.put<Play>(this.baseUrl + 'api/plays/' + this.id, this.play).subscribe(result => {
      this.router.navigateByUrl("/plays")
    }, error => console.error(error))
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
