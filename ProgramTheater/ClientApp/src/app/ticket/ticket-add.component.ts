import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket.models';
import { Router } from '@angular/router';
import { Play } from '../play/play.models';


@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['ticket-addSheet.css']
})
export class TicketAddComponent {

  public ticket: Ticket = <Ticket>{};
  public plays: Play[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
 
    this.loadTheater();
  }
  public saveTicket() {
    this.http.post(this.baseUrl + 'api/tickets', this.ticket).subscribe(result => {
      this.router.navigateByUrl("/tickets");
    }, error => console.error(error));
  }

  

  loadTheater() {
    this.http.get<Play[]>(this.baseUrl + 'api/plays').subscribe(result => {
      this.plays = result;
    }, error => console.error(error));
  }
  

}
