import { Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Article, ARTICLES } from '../../services/articles/articles.service';
import { parallax, Point } from '../../services/parallax/parallax.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  public cliffParallax = parallax.pipe(
    map((point: Point): { transform: string } => {
      const depth: number = 15;
      return { transform: `translate(${point.x * depth - depth}px, ${point.y * depth + depth}px)` };
    }),
  );

  constructor(@Inject(ARTICLES) public articles: Array<Article>) {}
}
