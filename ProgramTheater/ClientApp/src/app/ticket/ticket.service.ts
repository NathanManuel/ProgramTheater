import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Play } from '../play/play.models';
import { Ticket } from './ticket.models';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
 
  }

  public loadTickets() {
    return this.http.get<Ticket[]>(this.baseUrl + 'api/tickets');
  }

  public deleteTicket(theater: Ticket) {
    return this.http.delete(this.baseUrl + 'api/tickets/' + theater.id);
  }

  loadPlays() {
    return this.http.get<Play[]>(this.baseUrl + 'api/plays');
  }

  
}
