import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AuthRequest} from '../auth.request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  authRequest: AuthRequest | undefined;


  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    /*console.log(this.loginForm.value)*/
    if (this.loginForm.valid) {
     /* console.log(this.loginForm.value);*/
      this.authRequest = {
        email: this.loginForm.get('email')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? ''
      };
      this.authService.login(this.authRequest).subscribe({
        next: (result) => {
          if (this.authService.isLoggedIn()){
            this.router.navigateByUrl('/dashboard').then(() => result.message);
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
