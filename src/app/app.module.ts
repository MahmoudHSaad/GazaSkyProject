import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { UserModule } from './Pages/user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainPageComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
