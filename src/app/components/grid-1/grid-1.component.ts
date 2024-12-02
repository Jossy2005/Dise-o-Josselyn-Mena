import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-1',
  standalone: false,
  
  templateUrl: './grid-1.component.html',
  styleUrl: './grid-1.component.css'
})
export class Grid1Component {
  // Variable que controla qué columnas se deben mostrar
  activeColumn: number = 0;

  // Función para mostrar las columnas según el número del botón presionado
  showColumns(column: number) {
    this.activeColumn = column;
  }

}
