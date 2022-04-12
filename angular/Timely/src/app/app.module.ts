import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ShowListComponent } from './projectlist/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
