import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {StoreModule} from '@ngrx/store';
// import {UsersStoreModule} from './store/users-store.module';
import {AppComponent} from './components/app.component';

@NgModule({
  imports: [BrowserModule, FormsModule /*, StoreModule.forRoot({}), UsersStoreModule*/],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
