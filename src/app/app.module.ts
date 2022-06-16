import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    DashboardModule,
    CommonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
