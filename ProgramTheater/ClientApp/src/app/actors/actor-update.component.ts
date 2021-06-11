import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from './actor.models';

@Component({
  selector: 'app-actor-update',
  templateUrl: './actor-update.component.html',

})
export class ActorUpdateComponent implements OnInit {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public id: string;
  public actor: Actor = <Actor>{};

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadActors();
    });

  }

  public loadActors() {
    this.http.get<Actor>(this.baseUrl + 'api/actors/' + this.id).subscribe(result => {
      this.actor = result;
    }, error => console.error(error))
  }

  public updateActor() {
    this.http.put<Actor>(this.baseUrl + 'api/actors/' + this.id, this.actor).subscribe(result => {
      this.router.navigateByUrl("/actors")
    }, error => console.error(error))
  }
}
