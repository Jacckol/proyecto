import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }  // Inyectar Router

  ngOnInit(): void {
    // Inicialización del formulario
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  // Método para manejar el registro
  funRegistrar(): void {
    if (this.registerForm.valid) {
      console.log('Formulario de registro válido:', this.registerForm.value);

      // Aquí agregarías la lógica para registrar al usuario

      // Redirigir al login después de un registro exitoso
      this.router.navigate(['/auth/login']);
      // Redirige a la página de login
    } else {
      console.log('Formulario de registro inválido');
    }
    
  }
}
