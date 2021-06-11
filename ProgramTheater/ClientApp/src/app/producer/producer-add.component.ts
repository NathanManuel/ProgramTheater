import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producer } from './producer.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producer-add',
  templateUrl: './producer-add.component.html',
  styleUrls: ['producer-addSheet.css']
})
export class ProducerAddComponent {

  public producer: Producer = <Producer>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveProducer() {
    this.http.post(this.baseUrl + 'api/producers', this.producer).subscribe(result => {
      this.router.navigateByUrl("/producers");
    }, error => console.error(error));
  }


}
