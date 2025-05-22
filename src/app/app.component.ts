import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Registro', url: '/login', icon: 'person-add' },
    { title: 'Login', url: '/registro', icon: 'accessibility' },
    { title: 'Eliminar', url: '/eliminar', icon: 'trash' },

  ];
  public labels = ['Jose Andres Navarrete B',];
  constructor() {}
}
