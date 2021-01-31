import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  faTwitter = faTwitter
  faInstagram = faInstagram
  constructor() { }

  ngOnInit(): void {
  }

}
