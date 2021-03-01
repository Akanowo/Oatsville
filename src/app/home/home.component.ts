import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bounceAnimation, bounceInDownAnimation, bounceInLeftAnimation, bounceInRightAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceOutAnimation, bounceOutDownAnimation, bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, collapseAnimation, collapseHorizontallyAnimation, fadeInAnimation, fadeInDownAnimation, fadeInDownBigAnimation, fadeInDownOnEnterAnimation, fadeInExpandOnEnterAnimation, fadeInExpandRightOnEnterAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation, fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation, fadeInUpBigOnEnterAnimation, fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation, fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation, fadeOutUpBigAnimation, flashAnimation, flipAnimation, flipInXAnimation, flipInXOnEnterAnimation, flipInYAnimation, flipOutXAnimation, flipOutYAnimation, headShakeAnimation, heartBeatAnimation, hingeAnimation, hueRotateAnimation, jackInTheBoxAnimation, jelloAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, pulseAnimation, rollInAnimation, rollOutAnimation, rotateAnimation, rotateInAnimation, rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation, rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation, rotateOutUpLeftAnimation, rotateOutUpRightAnimation, rubberBandAnimation, shakeAnimation, shakeOnEnterAnimation, slideInDownAnimation, slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation, slideOutRightAnimation, slideOutUpAnimation, swingAnimation, tadaAnimation, wobbleAnimation, zoomInAnimation, zoomInDownAnimation, zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation, zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation } from 'angular-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    shakeAnimation({ anchor: 'shake1', delay: 100 }),
    shakeOnEnterAnimation({ anchor: 'shake2', delay: 100 }),
    flipInXOnEnterAnimation({ anchor: 'flip1', delay: 200, duration: 1000 }),
    fadeInExpandOnEnterAnimation({ anchor: 'fadeIn1', delay: 400, duration: 2000 }),
    fadeInExpandRightOnEnterAnimation({ anchor: 'fadein2', delay: 200 })
  ]
})

export class HomeComponent implements OnInit {

  // checked: boolean = false;
  constructor(private router: Router) { }

  scrollToAbout() {
    // window.scroll(0, 950);
    window.scrollTo({ behavior: 'smooth', top: 980 });
  }


  routeToContact() {
    this.router.navigate(['/contact']);
  }

  ngOnInit(): void {
    AOS.init();
  }

}
