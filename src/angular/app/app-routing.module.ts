import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table.component';
import {CardComponent} from './components/card.component';

const styles = {
  flex: '1 1 auto',
  padding: '40px 30px',
  overflowX: 'hidden',
  overflowY: 'auto',
};

const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: 'table', component: TableComponent, data: {styles}},
  {path: 'card', component: CardComponent, data: {styles}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
