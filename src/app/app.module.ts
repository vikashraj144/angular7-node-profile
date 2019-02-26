import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './components/header/header.component';
import { LeadContentComponent } from './components/lead-content/lead-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
    HeaderComponent,
    LeadContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
