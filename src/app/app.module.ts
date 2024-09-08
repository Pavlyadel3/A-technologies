import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';  
import { FileSaverModule } from 'ngx-filesaver';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewTicketComponent,
    AnalyticsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    TableModule,
    TooltipModule,
    FileSaverModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
