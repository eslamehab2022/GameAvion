import { state, style, trigger, keyframes, transition, animate } from '@angular/animations'

export const  routingAnimstion = trigger('routing', [

    transition('*<=>*', [
      style({opacity:0,transform:'translatex(50px)'}),
      animate('600ms',style({opacity:1,transform:'translatex(0px)'}))

    ])
])
