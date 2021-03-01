import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { SendMailService } from '../send-mail.service';
import { bounceAnimation, bounceInDownAnimation, bounceInLeftAnimation, bounceInRightAnimation, bounceInUpAnimation, bounceInUpOnEnterAnimation, bounceOutAnimation, bounceOutDownAnimation, bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, collapseAnimation, collapseHorizontallyAnimation, fadeInAnimation, fadeInDownAnimation, fadeInDownBigAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation, fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation, fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation, fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation, fadeOutUpBigAnimation, flashAnimation, flipAnimation, flipInXAnimation, flipInYAnimation, flipOutXAnimation, flipOutYAnimation, headShakeAnimation, heartBeatAnimation, hingeAnimation, hueRotateAnimation, jackInTheBoxAnimation, jelloAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, pulseAnimation, rollInAnimation, rollOutAnimation, rotateAnimation, rotateInAnimation, rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation, rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation, rotateOutUpLeftAnimation, rotateOutUpRightAnimation, rubberBandAnimation, shakeAnimation, shakeOnEnterAnimation, slideInDownAnimation, slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation, slideOutRightAnimation, slideOutUpAnimation, swingAnimation, tadaAnimation, wobbleAnimation, zoomInAnimation, zoomInDownAnimation, zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation, zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation } from 'angular-animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200, duration: 1500 }),
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
    rollInAnimation(),
    rollOutAnimation(),
    // other
    collapseAnimation(),
    collapseHorizontallyAnimation(),
    rotateAnimation(),
    rotateAnimation({ anchor: 'rotate90', degrees: 90 }),
    hueRotateAnimation(),
    hueRotateAnimation({ anchor: 'hueButton', duration: 20000 })
  ]
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  animateState: boolean = false;
  disableBtn: false;

  constructor(private recaptchaV3Service: ReCaptchaV3Service,
    private mailService: SendMailService, private toastr: ToastrService) { }

  submitForm() {
    console.log('Hello');
    this.recaptchaV3Service.execute('submit')
      .subscribe((token) => {
        if(!token || token === null) {
          this.toastr.error('Check your network settings and refresh')
          return;
        }
        return this.mailService.sendMail(this.contactForm.value, token)
      })
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]),
      message: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

}
