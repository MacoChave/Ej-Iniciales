import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cliente';
  userData: User = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  signin(): void {
    this.userData = this.signinForm.value;
    this.authService
      .signin(this.userData)
      .subscribe((res) => alert(res.message));
  }
}
