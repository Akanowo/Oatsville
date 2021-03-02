import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { bounceAnimation, bounceInDownAnimation, bounceInLeftAnimation, bounceInRightAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceOutAnimation, bounceOutDownAnimation, bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, collapseAnimation, collapseHorizontallyAnimation, fadeInAnimation, fadeInDownAnimation, fadeInDownBigAnimation, fadeInDownOnEnterAnimation, fadeInExpandOnEnterAnimation, fadeInExpandRightOnEnterAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation, fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation, fadeInUpBigOnEnterAnimation, fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation, fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation, fadeOutUpBigAnimation, flashAnimation, flipAnimation, flipInXAnimation, flipInXOnEnterAnimation, flipInYAnimation, flipOutXAnimation, flipOutYAnimation, headShakeAnimation, heartBeatAnimation, hingeAnimation, hueRotateAnimation, jackInTheBoxAnimation, jelloAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, pulseAnimation, rollInAnimation, rollOutAnimation, rotateAnimation, rotateInAnimation, rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation, rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation, rotateOutUpLeftAnimation, rotateOutUpRightAnimation, rubberBandAnimation, shakeAnimation, shakeOnEnterAnimation, slideInDownAnimation, slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation, slideOutRightAnimation, slideOutUpAnimation, swingAnimation, tadaAnimation, wobbleAnimation, zoomInAnimation, zoomInDownAnimation, zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation, zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation } from 'angular-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  animations: [
    shakeAnimation({ anchor: 'shake1', delay: 100 }),
    shakeOnEnterAnimation({ anchor: 'shake2', delay: 100 }),
    flipInXOnEnterAnimation({ anchor: 'flip1', delay: 200, duration: 1000 }),
    fadeInExpandOnEnterAnimation({ anchor: 'fadeIn1', delay: 400, duration: 2000 }),
    fadeInExpandRightOnEnterAnimation({ anchor: 'fadein2', delay: 200 })
  ]
})

export class ProductPageComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Oatsville Old Fashion',
      imgUrl: 'assets/oatsville/oat-2-r.png'
    },
    {
      id: 2,
      name: 'Oatsville Quick Oats',
      imgUrl: 'assets/oatsville/oat1-1111.png'
    }
  ]

  constructor(private ngModal: NgxSmartModalService) { }


  displayModalData() {
    // const modal = this.products.find((x) => x.id === id);
    // this.ngModal.setModalData({
    //   name: modal.name,
    //   imgUrl: modal.imgUrl
    // }, 'detailsModal')
    this.ngModal.open('categoryDetailsModal')
  }

  ngOnInit(): void {
    AOS.init()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
