import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { parallax, Point } from './shared/services/parallax/parallax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundParallax = parallax.pipe(
    map((point: Point): { transform: string } => {
      const depth: number = 50;
      return { transform: `translate(${point.x * depth}px, ${point.y * depth}px)` };
    })
  )
}
