import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ServerComponent } from './server/server.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MessageComponent } from './message/message.component'


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ServerComponent,
    ProfileEditorComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
