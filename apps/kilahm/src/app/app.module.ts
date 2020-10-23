import { Location } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { followDeepLink } from './initialization';
import { ResumeComponent } from './resume/resume.component';
import { routes } from './routes';
@NgModule({
  declarations: [AppComponent, ResumeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'disabled', enableTracing:  !environment.production}),
  ],
  providers: [
    Location,
    {
      provide: APP_INITIALIZER,
      useFactory: followDeepLink,
      multi: true,
      deps: [Location, Router],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
