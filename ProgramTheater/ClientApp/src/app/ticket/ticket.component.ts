import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket.models';
import { TicketService } from './ticket.service';
import { Play } from '../play/play.models';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class TicketComponent {
  public tickets: Ticket[];
  public plays: Play[];
  disticketedColumns: string[] = ['buyerName', 'play', 'seatL', 'update', 'delete'];

  constructor(private ticketService: TicketService) {
    this.loadTickets();
    this.loadPlays();
  }
  public deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket).subscribe(result => {
      this.loadTickets();
    }, error => console.error(error))
  }

  public loadTickets() {
    this.ticketService.loadTickets().subscribe(result => {
      this.tickets = result;
    }, error => console.error(error));
  }
 

 
  public loadPlays() {
    this.ticketService.loadPlays().subscribe(result => {
      this.plays = result;
    }, error => console.error(error));
  }
 
}
