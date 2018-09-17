import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { MemberService } from './member.service';
import { routes } from './app.routes';
import { MatTableModule, MatInputModule, MatButtonModule, MatTabsModule, MatPaginatorModule, MatDatepickerModule,MatNativeDateModule,
         MatOptionModule,MatSelectModule,  MatToolbarModule,  MatMenuModule,  MatIconModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { Data } from './data.model';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    routes,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [AuthGuard,MemberService,Data,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
