import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  user = {
    name: 'Juan Pérez',
    email: 'juanperez@email.com',
    role: 'Administrador'
  };

}
