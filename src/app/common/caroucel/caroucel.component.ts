import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-caroucel',
  templateUrl: './caroucel.component.html',
  styleUrls: ['./caroucel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaroucelComponent implements OnInit {
  img = [];
  responsiveOptions;
   service = [{
    urlImg: "grinding-2755562_1280.jpg",
    title:"Hojalatería en general",
    description:"Se realiza hojalatería en general"
  },
  {
    urlImg: "wash-a-car-1822415_1280.jpg",
    title:" Estética automotriz",
    description:""
  },
  {
    urlImg: "porche.jpg",
    title:"Pintura",
    description:"Por piezas o en general"
  },
  {
    urlImg: "car-482683_1280.jpg",
    title:"Abrillantado",
    description:"Servicio de pulido y/o encerado"
  }]
  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.img=[1,2,3,4,5,6];
  }

}
