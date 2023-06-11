import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {LoginComponent} from './pages/login/login.component';
import {ProgressStepsComponent} from './custom-components/progress-steps/progress-steps.component';
import {RegisterComponent} from './pages/register/register.component';
import {CustomDatepickerComponent} from '@custom-components/custom-datepicker/custom-datepicker.component';
import {DividerWithTextComponent} from '@custom-components/divider-with-text/divider-with-text.component';
import {CustomTextInputWithIconComponent} from '@custom-components/custom-text-input-with-icon/custom-text-input-with-icon.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {environment} from 'src/environments/environment.development';
import {ProgressButtonComponent} from './custom-components/progress-button/progress-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDatepickerComponent,
    LoginComponent,
    ProgressStepsComponent,
    RegisterComponent,
    DividerWithTextComponent,
    CustomTextInputWithIconComponent,
    LandingPageComponent,
    ProgressButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline', floatLabel: 'always', subscriptSizing: 'dynamic'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
