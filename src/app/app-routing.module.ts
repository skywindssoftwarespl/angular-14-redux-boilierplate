import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((authModule) => authModule.AuthModule),
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (dashboard) => dashboard.DashboardModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (settings) => settings.SettingsModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(
        (profile) => profile.ProfileModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
