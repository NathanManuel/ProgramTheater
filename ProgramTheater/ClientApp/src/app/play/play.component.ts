import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Play } from './play.models';
import { PlayService } from './play.service';
import { Actor } from '../actors/actor.models';
import { Producer } from '../Producer/producer.models';
import { Theater } from '../theaterInfo/theater.models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class PlayComponent {
  public plays: Play[];
  public actors: Actor[];
  public producers: Producer[];
  public theaters: Theater[];
  displayedColumns: string[] = ['playName', 'mainActor', 'producer','theater', 'update', 'delete'];

  constructor(private playService: PlayService) {
    this.loadPlays();
    this.loadActors();
    this.loadProducers();
    this.loadTheaters();
  }
  public deletePlay(play: Play) {
    this.playService.deletePlay(play).subscribe(result => {
      this.loadPlays();
    }, error => console.error(error))
  }

  public loadPlays() {
    this.playService.loadPlays().subscribe(result => {
      this.plays = result;
    }, error => console.error(error));
  }
  public loadActors() {
    this.playService.loadActors().subscribe(result => {
      this.actors = result;
    }, error => console.error(error));
  }

  public loadProducers() {
    this.playService.loadProducers().subscribe(result => {
      this.producers = result;
    }, error => console.error(error));
  }
  public loadTheaters() {
    this.playService.loadTheaters().subscribe(result => {
      this.theaters = result;
    }, error => console.error(error));
  }
 
}
