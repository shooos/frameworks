import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UsersStoreModule} from './store/users-store.module';
import {AppComponent} from './components/app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UsersStoreModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
