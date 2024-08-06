import { Routes } from '@angular/router';
import { TabBarComponent } from './tab-bar/tab-bar.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'case-list',
    loadComponent: () => import('./case-list/case-list.page').then(m => m.CaseListPage)
  },
  {
    path: 'create-case',
    loadComponent: () => import('./create-case/create-case.page').then(m => m.CreateCasePage)
  },
  // {
  //   path: 'tabs/capture',
  //   loadComponent: () => import('./capture/capture.page').then(m => m.CapturePage)
  // },
  {
    path: 'tabs',
    component: TabBarComponent,
    children: [
      {
        path: 'case-list',
        loadComponent: () => import('./case-list/case-list.page').then(m => m.CaseListPage)
      },
      {
        path: 'case-details',
        loadComponent: () => import('./case-details/case-details.page').then(m => m.CaseDetailsPage)
      },
      {
        path: 'media-review',
        loadComponent: () => import('./media-review/media-review.page').then(m => m.MediaReviewPage)
      },
      {
        path: 'capture',
        loadComponent: () => import('./capture/capture.page').then(m => m.CapturePage)
      }
    ]
  },
  {
    path: 'case-details',
    loadComponent: () => import('./case-details/case-details.page').then(m => m.CaseDetailsPage)
  },
  {
    path: 'media-review',
    loadComponent: () => import('./media-review/media-review.page').then(m => m.MediaReviewPage)
  },
];
