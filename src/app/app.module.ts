import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NewTaskComponent } from './main/new-task/new-task.component';
import { CheckBoxComponent } from './main/check-box/check-box.component';
import { FavoritesComponent } from './main/favorites/favorites.component';
import { DeleteTaskComponent } from './main/delete-task/delete-task.component';
import { ColorCheckboxComponent } from './main/color-checkbox/color-checkbox.component';
import { DateComponent } from './main/date/date.component';
import { ListComponent } from './main/list/list.component';
import { ListTaskComponent } from './main/list-task/list-task.component';
import { ButtonComponent } from './header/button/button.component';
import { InputComponent } from './header/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NewTaskComponent,
    CheckBoxComponent,
    FavoritesComponent,
    DeleteTaskComponent,
    ColorCheckboxComponent,
    DateComponent,
    ListComponent,
    ListTaskComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
