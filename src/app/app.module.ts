import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';

// services
import { ModalService } from './services/modal.service';

@NgModule({
    imports: [
        AngularFontAwesomeModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ModalComponent,
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }