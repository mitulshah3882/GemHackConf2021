import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {
  // Side Nav
  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  // Icons
  faTwitter = faTwitter
  faInstagram = faInstagram
  faLinkedinIn = faLinkedinIn

  // Scroll to Top Button
  // isShow: boolean | undefined;
  // topPosToStartShowing = 100;

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   console.log('[scroll]', scrollPosition);
    
  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isShow = true;
  //   } else {
  //     this.isShow = false;
  //   }
  // }

  // gotoTop() {
  //   console.log('Inside go to top function')
  //   window.scroll({ 
  //     top: 0, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
