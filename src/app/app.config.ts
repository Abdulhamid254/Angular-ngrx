import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from '../app/auth/store/effects'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions()),
    provideHttpClient(),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideEffects(authEffects), // this line initializes our listener hence our effect will listen to our actions
    provideStoreDevtools({
    maxAge:25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace:  false,
    traceLimit: 75,
  })]
};
