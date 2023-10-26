import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import * as $ from 'jquery';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() button: boolean = false;
  @Input() header: String | null = null;
  @Input() text: String | null = null;
  @Input() height: String | null = null;
  @Input() image: String | null = null;
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  index = 0;

  swiperConfig: SwiperOptions = {
    spaceBetween: 40,
    navigation: true,
    pagination: true,
    preventInteractionOnTransition: false,
    autoplay: true,
    loop: true,
    speed: 3000,
    effect: 'fade',
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.init(this.swiperConfig);
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
    console.log(this.index);
  }
}
