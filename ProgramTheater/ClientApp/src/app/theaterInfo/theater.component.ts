import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theater } from './theater.models';
import { TheaterService } from './theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class TheaterComponent {
  public theaters: Theater[];
  displayedColumns: string[] = [ 'name', 'country','city','street', 'update', 'delete'];

  constructor(private theaterService: TheaterService) {
    this.loadTheaters();
  }
  public deleteTheater(theater: Theater) {
    this.theaterService.deleteTheater(theater).subscribe(result => {
      this.loadTheaters();
    }, error => console.error(error))
  }

  public loadTheaters() {
    this.theaterService.loadTheaters().subscribe(result => {
      this.theaters = result;
    }, error => console.error(error));
  }

 
}
