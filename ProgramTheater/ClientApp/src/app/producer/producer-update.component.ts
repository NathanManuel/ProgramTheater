import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Producer } from './producer.models';

@Component({
  selector: 'app-producer-update',
  templateUrl: './producer-update.component.html',

})
export class ProducerUpdateComponent implements OnInit {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public id: string;
  public producer: Producer = <Producer>{};

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadProducers();
    });

  }

  public loadProducers() {
    this.http.get<Producer>(this.baseUrl + 'api/producers/' + this.id).subscribe(result => {
      this.producer = result;
    }, error => console.error(error))
  }

  public updateProducer() {
    this.http.put<Producer>(this.baseUrl + 'api/producers/' + this.id, this.producer).subscribe(result => {
      this.router.navigateByUrl("/producers")
    }, error => console.error(error))
  }
}
