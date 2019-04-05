import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddReaderComponent } from "../app/add-reader/add-reader.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { EditBookComponent } from "../app/edit-book/edit-book.component";
import { EditReaderComponent } from "../app/edit-reader/edit-reader.component";
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
