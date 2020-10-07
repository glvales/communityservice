import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modals',
    loadChildren: () => import('./modals/todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'inprogress',
    loadChildren: () => import('./modals/inprogress/inprogress.module').then( m => m.InprogressPageModule)
  },
  {
    path: 'done',
    loadChildren: () => import('./modals/done/done.module').then( m => m.DonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
