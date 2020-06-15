import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { routing } from './routing';
import { ContactUSComponent } from './contacts/contact-us/contact-us.component';
import { ContactInfoComponent } from './contacts/contact-info/contact-info.component';
import { TeamInfoComponent } from './contacts/team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    ContactUSComponent,
    ContactInfoComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
