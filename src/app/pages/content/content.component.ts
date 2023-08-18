import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  cover: string = '../../../assets/img/stock01.jpg'
  contentTitle: string = 'Meu Artigo'
  contentText: string = 'A descrição do meu artigo.'


}
