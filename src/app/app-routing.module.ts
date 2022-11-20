import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NetworksComponent } from './Components/networks/networks.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PeopleComponent } from './Components/people/people.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvShowComponent } from './Components/tv-show/tv-show.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'networks', component: NetworksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tvShow', component: TvShowComponent },
  { path: 'details/:mediaType/:id', component: DetailsComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
