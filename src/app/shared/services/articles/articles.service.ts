import { InjectionToken, Type } from '@angular/core';
import { NotFoundComponent } from '../../../not-found/not-found.component';

export interface Article {
  name: string;
  component: Type<any>
}

export const ARTICLES = new InjectionToken<Array<Article>>('Articles', {
  providedIn: 'root',
  factory() {
    return [{
      name: 'Why i suck at programming',
      component: NotFoundComponent
    }]
  }
})
