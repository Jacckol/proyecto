import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false) // Recordar sesión
  });

  funIngresar() {
    if (this.loginForm.valid) {
      this.authService.loginConNest(this.loginForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["login"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  forgotPassword() {
    console.log('Olvidé mi contraseña');
    // Lógica para manejar el olvido de contraseña
  }
}
