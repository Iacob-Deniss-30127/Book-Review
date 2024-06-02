import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessaagesComponent } from './components/errors/validation-messaages/validation-messaages.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NotFoundComponent,
        ValidationMessaagesComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        RouterModule
    ]
})

export class SharedModule {}