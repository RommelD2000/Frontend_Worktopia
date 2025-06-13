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

    if (this.loginForm.valid) {
      this.authRequest = {
        email: this.loginForm.get('email')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? ''
      };
      this.authService.login(this.authRequest).subscribe({
        next: (result) => {
          if (this.authService.isLoggedIn()){
            const role = this.authService.getUserRole();
            if (role === 'ROLE_ADMIN'){
              this.router.navigateByUrl('/dashboard').then(() => result.message);
            } else if (role==='ROLE_EMPLOYE'){
              this.router.navigateByUrl('/interface-employes').then(() => result.message);
            } else {
              this.router.navigateByUrl('/unauthorized').then(() => result.message);
            }

          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
