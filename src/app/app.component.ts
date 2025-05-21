import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'accessibility' },
    { title: 'registro', url: '/registro', icon: 'person-add' },
    { title: 'eliminar', url: '/eliminar', icon: 'trash' },

  ];
  public labels = ['Jose Andres Navarrete B',];
  constructor() {}
}
