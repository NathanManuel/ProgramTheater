import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theater } from './theater.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theater-add',
  templateUrl: './theater-add.component.html',
  styleUrls: ['theater-addSheet.css']
})
export class TheaterAddComponent {

  public theater: Theater = <Theater>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveTheater() {
    this.http.post(this.baseUrl + 'api/theaters', this.theater).subscribe(result => {
      this.router.navigateByUrl("/theaters");
    }, error => console.error(error));
  }


}
