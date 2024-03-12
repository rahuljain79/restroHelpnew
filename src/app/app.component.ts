import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { nopageComponent } from './pages/404/404.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent,  CommonModule,ContactComponent,nopageComponent,BlogComponent,
    RouterModule,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restrop';
  formbuilder=inject(FormBuilder);
  customerform:FormGroup=this.formbuilder.group({
    name:[''],
    email:[''],
  phone:[null],
    city:[null],
    restaurant:['India'],
    current:[],
    outlettype:[]
  })

 
}

