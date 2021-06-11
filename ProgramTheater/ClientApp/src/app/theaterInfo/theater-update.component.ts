import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Theater } from './theater.models';

@Component({
  selector: 'app-theater-update',
  templateUrl: './theater-update.component.html',

})
export class TheaterUpdateComponent implements OnInit {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public id: string;
  public theater: Theater = <Theater>{};

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadTheaters();
    });

  }

  public loadTheaters() {
    this.http.get<Theater>(this.baseUrl + 'api/theaters/' + this.id).subscribe(result => {
      this.theater = result;
    }, error => console.error(error))
  }

  public updateTheater() {
    this.http.put<Theater>(this.baseUrl + 'api/theaters/' + this.id, this.theater).subscribe(result => {
      this.router.navigateByUrl("/theaters")
    }, error => console.error(error))
  }
}
