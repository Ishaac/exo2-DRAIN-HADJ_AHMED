import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gestion', component: GestionComponent},
  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: '**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
