import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGamepad, faPlusCircle, faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header implements OnInit{
  faGamepad = faGamepad;
  faPlusCircle = faPlusCircle;
  faHome = faHome;
  faCalendar = faCalendar
  
  today = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});


  constructor() { }

  ngOnInit(): void {
  }

}
