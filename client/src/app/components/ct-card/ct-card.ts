import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faListCheck, faGamepad, faDiagramProject, faBullseye, faClock, faCrosshairs} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ct-card',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './ct-card.html',
  styleUrl: './ct-card.css'
})
export class CtCard implements OnInit{
  @Input() dados: any;
  faListCheck = faListCheck;
  faGamepad = faGamepad;
  faDiagramProject = faDiagramProject
  faBullseye = faBullseye
  faClock = faClock
  faCrosshairs = faCrosshairs
  constructor() { }

  ngOnInit(): void{
    // this.getGames();
  }
}
