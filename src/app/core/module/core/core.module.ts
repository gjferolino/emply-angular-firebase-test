import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
