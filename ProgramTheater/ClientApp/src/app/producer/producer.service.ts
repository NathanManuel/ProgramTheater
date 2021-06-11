import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Producer } from './producer.models';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public loadProducers() {
    return this.http.get<Producer[]>(this.baseUrl + 'api/producers');
  }

  public deleteProducer(theater: Producer) {
    return this.http.delete(this.baseUrl + 'api/producers/' + theater.id);
  }

}
