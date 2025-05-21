import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      // Usuario válido, redirige a otra página
      this.mensajeError = '';
      this.router.navigate(['/registro']); // o cualquier ruta que desees
    } else {
      // Usuario incorrecto
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}
