import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProductsInfoService } from '../products-info.service';
import { bounceAnimation, bounceInDownAnimation, bounceInLeftAnimation, bounceInRightAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceOutAnimation, bounceOutDownAnimation, bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, collapseAnimation, collapseHorizontallyAnimation, fadeInAnimation, fadeInDownAnimation, fadeInDownBigAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation, fadeInOnEnterAnimation, fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation, fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation, fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation, fadeOutUpBigAnimation, flashAnimation, flipAnimation, flipInXAnimation, flipInYAnimation, flipOutXAnimation, flipOutYAnimation, headShakeAnimation, heartBeatAnimation, hingeAnimation, hueRotateAnimation, jackInTheBoxAnimation, jelloAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, pulseAnimation, rollInAnimation, rollOutAnimation, rotateAnimation, rotateInAnimation, rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation, rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation, rotateOutUpLeftAnimation, rotateOutUpRightAnimation, rubberBandAnimation, shakeAnimation, shakeOnEnterAnimation, slideInDownAnimation, slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation, slideOutRightAnimation, slideOutUpAnimation, swingAnimation, tadaAnimation, wobbleAnimation, zoomInAnimation, zoomInDownAnimation, zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation, zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation } from 'angular-animations';
import { state, trigger, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  //styleUrls: ['./product-details.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200, duration: 2000, translate: '400px' }),
    bounceAnimation(),
    flashAnimation(),
    pulseAnimation({ anchor: 'pulse' }),
    rubberBandAnimation(),
    shakeAnimation(),
    shakeOnEnterAnimation({ anchor: 'shake', delay: 100, duration: 200 }),
    swingAnimation(),
    tadaAnimation(),
    wobbleAnimation(),
    jelloAnimation(),
    heartBeatAnimation(),
    headShakeAnimation(),
    bounceAnimation(),
    bounceInDownAnimation(),
    bounceInLeftAnimation(),
    bounceInRightAnimation(),
    bounceInUpAnimation(),
    bounceOutAnimation(),
    bounceOutDownAnimation(),
    bounceOutLeftAnimation(),
    bounceOutRightAnimation(),
    bounceOutUpAnimation(),
    fadeInAnimation(),
    fadeInDownAnimation(),
    fadeInOnEnterAnimation({ anchor: 'fadeIn', delay: 200, duration: 7000 }),
    fadeInDownBigAnimation(),
    fadeInLeftAnimation(),
    fadeInLeftBigAnimation(),
    fadeInRightAnimation(),
    fadeInRightBigAnimation(),
    fadeInUpAnimation(),
    fadeInUpBigAnimation(),
    fadeOutAnimation(),
    fadeOutDownAnimation(),
    fadeOutDownBigAnimation(),
    fadeOutLeftAnimation(),
    fadeOutLeftBigAnimation(),
    fadeOutRightAnimation(),
    fadeOutRightBigAnimation(),
    fadeOutUpAnimation(),
    fadeOutUpBigAnimation(),
    flipAnimation(),
    flipInXAnimation(),
    flipInYAnimation(),
    flipOutXAnimation(),
    flipOutYAnimation(),
    lightSpeedInAnimation(),
    lightSpeedOutAnimation(),
    rotateInAnimation(),
    rotateInDownLeftAnimation(),
    rotateInDownRightAnimation(),
    rotateInUpLeftAnimation(),
    rotateInUpRightAnimation(),
    rotateOutAnimation(),
    rotateOutDownLeftAnimation(),
    rotateOutDownRightAnimation(),
    rotateOutUpLeftAnimation(),
    rotateOutUpRightAnimation(),
    slideInDownAnimation(),
    slideInLeftAnimation(),
    slideInRightAnimation(),
    slideInUpAnimation(),
    slideOutDownAnimation(),
    slideOutLeftAnimation(),
    slideOutRightAnimation(),
    slideOutUpAnimation(),
    zoomInAnimation(),
    zoomInDownAnimation(),
    zoomInLeftAnimation(),
    zoomInRightAnimation(),
    zoomInUpAnimation(),
    zoomOutAnimation(),
    zoomOutDownAnimation(),
    zoomOutLeftAnimation(),
    zoomOutRightAnimation(),
    zoomOutUpAnimation(),
    hingeAnimation(),
    jackInTheBoxAnimation(),
    rollInAnimation({ anchor: 'rollIn', duration: 1000 }),
    rollOutAnimation(),
    // other
    collapseAnimation(),
    collapseHorizontallyAnimation(),
    rotateAnimation(),
    rotateAnimation({ anchor: 'rotate90', degrees: 360, duration: 1000 }),
    hueRotateAnimation(),
    hueRotateAnimation({ anchor: 'hueButton', duration: 2000 })
  ]
})
export class ProductDetailsComponent implements OnInit {
  @Input() hidden: boolean;
  @Input() productId: number;
  @ViewChild('productContainer') productContainer: any;
  @Output() hide: EventEmitter<boolean> = new EventEmitter()
  product: any = {};
  otherProducts: any[];

  animateState = false;
  hiddenState = false;

  constructor(private productService: ProductsInfoService) { }

  hideDetails(){
    this.hidden = !this.hidden
    console.log(this.hidden)
    this.hide.emit(this.hidden)
  }

  toggleState() {
    console.log('State hidden')
    this.animateState = !!this.animateState;
    this.hiddenState = !this.hiddenState;
  }

  getProductDetails() {
    this.product = this.productService.getProduct(this.productId);
    return;
  }

  getOtherProducts() {
    return this.otherProducts = this.productService.getProducts().filter((x) => x.id !== this.productId);
  }

  moveLeft() {
    console.log(this.productContainer)
    this.productContainer.nativeElement.style.right = '60em';
    this.productContainer.nativeElement.style.transition = '.4s';
  }

  updateProductDetails(id: number) {

    console.log(window.clientInformation.onLine)

    if(document.body.clientWidth <= 576) {
      window.scrollTo({ top: 2700, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 2300, behavior: 'smooth' })
    }

    console.log(id);
    this.product = this.productService.getProduct(id);
    this.otherProducts = this.productService.getProducts().filter((x) => x.id !== id);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getProductDetails();
    this.getOtherProducts();
  }

}
