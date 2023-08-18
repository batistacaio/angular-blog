import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', 'small-card.responsive.component.css']
})
export class SmallCardComponent {
  @Input()
  id: string = "0"
  @Input()
  smallCardImg: string = ''
  @Input()
  smallCardDesc: string = ''
}
