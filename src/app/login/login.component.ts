import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  personForm!: FormGroup;

  name = '';
  password = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initPersonForm();
  }
  
  initPersonForm(): void {
    this.personForm = this.formBuilder.group({
      name: 'dame',
      password: 'dame',
    });
  }

login(name: string, password: string): void {

  if (this.authService.login(name, password)) {
    this.router.navigate(['/clients']);
    // window.location.reload();
    console.log("Logged in successfully.");
  } else {
    console.log("Login failed. Invalid credentials.");
  }
}
}
