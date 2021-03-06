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
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
    HeaderComponent,
    LeadContentComponent,
    AboutUsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    CountryComponent
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
