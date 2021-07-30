import { InjectionToken, Type } from '@angular/core';

export interface Article {
  name: string;
  component: Type<any>
}

export const ARTICLES = new InjectionToken<Array<Article>>('Articles', {
  providedIn: 'root',
  factory() {
    return []
  }
})
