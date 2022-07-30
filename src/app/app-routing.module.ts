import { noUndefined } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

const routes: Routes = [

  { path:"", redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:MainPageComponent },
  { path: 'Users' , loadChildren:()=> import("../app/Pages/user/user.module").then(m=> m.UserModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
