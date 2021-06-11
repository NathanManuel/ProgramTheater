import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from './ticket.models';
import { Theater } from '../theaterInfo/theater.models';
import { Play } from '../play/play.models';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',

})
export class TicketUpdateComponent implements OnInit {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  public id: string;
  public ticket: Ticket = <Ticket>{};
  public plays: Play[];

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadPlay();
      this.loadTickets();
    });

  }

  public loadTickets() {
    this.http.get<Ticket>(this.baseUrl + 'api/tickets/' + this.id).subscribe(result => {
      this.ticket = result;
    }, error => console.error(error))
  }

  public updateTicket() {
    this.http.put<Ticket>(this.baseUrl + 'api/tickets/' + this.id, this.ticket).subscribe(result => {
      this.router.navigateByUrl("/tickets")
    }, error => console.error(error))
  }

  loadPlay() {
    this.http.get<Play[]>(this.baseUrl + 'api/plays').subscribe(result => {
      this.plays = result;
    }, error => console.error(error));
  }
}
