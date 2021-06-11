import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheaterComponent } from './theaterInfo/theater.component';
import { TheaterAddComponent } from './theaterInfo/theater-add.component';
import { TheaterUpdateComponent } from './theaterInfo/theater-update.component';
import { ActorComponent } from './actors/actor.component';
import { ActorAddComponent } from './actors/actor-add.component';
import { ActorUpdateComponent } from './actors/actor-update.component';
import { ProducerComponent } from './Producer/producer.component';
import { ProducerUpdateComponent } from './Producer/producer-update.component';
import { ProducerAddComponent } from './Producer/producer-add.component';
import { PlayAddComponent } from './play/play-add.component';
import { PlayComponent } from './play/play.component';
import { PlayUpdateComponent } from './play/play-update.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketUpdateComponent } from './ticket/ticket-update.component';
import { TicketAddComponent } from './ticket/ticket-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TheaterComponent,
    TheaterAddComponent,
    TheaterUpdateComponent,
    ActorComponent,
    ActorAddComponent,
    ActorUpdateComponent,
    ProducerComponent,
    ProducerUpdateComponent,
    ProducerAddComponent,
    PlayComponent,
    PlayUpdateComponent,
    PlayAddComponent,
    TicketComponent,
    TicketUpdateComponent,
    TicketAddComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'theaters', component: TheaterComponent },
      { path: 'theater-add', component: TheaterAddComponent },
      { path: 'theater-update', component: TheaterUpdateComponent },
      { path: 'actors', component: ActorComponent },
      { path: 'actor-add', component: ActorAddComponent },
      { path: 'actor-update', component: ActorUpdateComponent },
      { path: 'producers', component: ProducerComponent },
      { path: 'producer-add', component: ProducerAddComponent },
      { path: 'producer-update', component: ProducerUpdateComponent },
      { path: 'plays', component: PlayComponent },
      { path: 'play-add', component: PlayAddComponent },
      { path: 'play-update', component: PlayUpdateComponent },
      { path: 'tickets', component: TicketComponent },
      { path: 'ticket-add', component: TicketAddComponent },
      { path: 'ticket-update', component: TicketUpdateComponent },
 
    ]),
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
