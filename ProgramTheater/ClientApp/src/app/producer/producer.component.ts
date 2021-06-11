import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producer } from './producer.models';
import { ProducerService } from './producer.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class ProducerComponent {
  public producers: Producer[];
  displayedColumns: string[] = [ 'name', 'age', 'nationality','gender', 'update', 'delete'];

  constructor(private producerService: ProducerService) {
    this.loadProducers();
  }
  public deleteProducer(producer: Producer) {
    this.producerService.deleteProducer(producer).subscribe(result => {
      this.loadProducers();
    }, error => console.error(error))
  }

  public loadProducers() {
    this.producerService.loadProducers().subscribe(result => {
      this.producers = result;
    }, error => console.error(error));
  }

 
}
