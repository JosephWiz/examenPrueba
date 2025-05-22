import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  nombre: string = '';
  telefono: string = '';
  fecha: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async mostrarAlerta(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alerta.present();
  }

  async login() {
    if (!this.nombre || this.nombre.trim().length < 3) {
      await this.mostrarAlerta('El nombre es obligatorio y debe tener al menos 3 caracteres.');
      return;
    }

    if (!this.telefono || this.telefono.trim() === '') {
      await this.mostrarAlerta('El teléfono es obligatorio.');
      return;
    }

    if (!this.fecha || this.fecha.trim() === '') {
      await this.mostrarAlerta('La fecha de nacimiento es obligatoria.');
      return;
    }

    //  redirige
    this.router.navigate(['/registro']);
  }
}
