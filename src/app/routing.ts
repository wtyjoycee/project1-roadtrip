import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ContactUSComponent } from './contacts/contact-us/contact-us.component';
import { ContactInfoComponent } from './contacts/contact-info/contact-info.component';
import { TeamInfoComponent } from './contacts/team-info/team-info.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts',   redirectTo: '/contacts/contact-info', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, children: [
    { path: 'contact-us', component: ContactUSComponent },
    { path: 'contact-info', component: ContactInfoComponent },
    { path: 'team-info', component: TeamInfoComponent },
  ]},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class routing {

}
