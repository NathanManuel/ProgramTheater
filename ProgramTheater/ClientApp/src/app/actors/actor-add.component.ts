import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from './actor.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['actor-addSheet.css']
})
export class ActorAddComponent {

  public actor: Actor = <Actor>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveActor() {
    this.http.post(this.baseUrl + 'api/actors', this.actor).subscribe(result => {
      this.router.navigateByUrl("/actors");
    }, error => console.error(error));
  }


}
