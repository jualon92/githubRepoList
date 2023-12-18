import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
  /*
  {
    path: 'about',
    loadChildren: () =>
      import('@monorepo-example/feature-about').then(
        (m) => m.FeatureAboutModule
      ),
  }, */
];
