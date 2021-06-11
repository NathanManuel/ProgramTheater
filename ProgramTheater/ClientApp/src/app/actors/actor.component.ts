import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from './actor.models';
import { ActorService } from './actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class ActorComponent {
  public actors: Actor[];
  displayedColumns: string[] = [ 'name', 'age', 'nationality','gender', 'update', 'delete'];

  constructor(private actorService: ActorService) {
    this.loadActors();
  }
  public deleteActor(actor: Actor) {
    this.actorService.deleteActor(actor).subscribe(result => {
      this.loadActors();
    }, error => console.error(error))
  }

  public loadActors() {
    this.actorService.loadActors().subscribe(result => {
      this.actors = result;
    }, error => console.error(error));
  }
 

 
}
