import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { StatsService }         from './stats.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
