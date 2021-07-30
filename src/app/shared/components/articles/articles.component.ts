import { Component, Inject } from '@angular/core';
import { ARTICLES } from '../../services/articles/articles.service';

class Articles {
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(@Inject(ARTICLES) public articles: Array<Articles>) {
  }
}
