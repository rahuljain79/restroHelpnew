import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.Component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formGroup = new FormGroup({
    name : new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
    restaurant: new FormControl(null),
    current: new FormControl(null),
    outletType: new FormControl(),
    date: new FormControl(),

  });
  submitForm(fg: any)
  {
    console.log(fg);
  }
}
