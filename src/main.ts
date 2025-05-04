import { bootstrapApplication }      from '@angular/platform-browser';
import { provideRouter }             from '@angular/router';
import { provideHttpClient }         from '@angular/common/http';
import { ReactiveFormsModule }       from '@angular/forms';
import { AppComponent }              from './app/app.component';
import { routes }                    from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),           // makes HttpClient available
    ReactiveFormsModule            // makes FormBuilder, FormGroup, etc. available
  ]
})
.catch(err => console.error(err));
