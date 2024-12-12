import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  items: any[] = []; // Lista de perfiles
  mostrarEditor: boolean = false; // Controla la visibilidad del modal de edición
  perfilSeleccionado: any = null; // Perfil seleccionado para edición

  ngOnInit(): void {
    // Inicializar la lista de perfiles
    this.items = [
      { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
      { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' },
      // Agrega más items según sea necesario
    ];
  }

  // Función para abrir el modal de edición
  editarPerfil(persona: any): void {
    if (persona) {
      this.perfilSeleccionado = { ...persona }; // Clonamos el perfil seleccionado para evitar la mutación
      this.mostrarEditor = true; // Abrimos el modal
    }
  }

  // Función para guardar los cambios en el perfil editado
  guardarEdicion(): void {
    const index = this.items.findIndex(i => i.id === this.perfilSeleccionado.id);
    if (index !== -1) {
      this.items[index] = { ...this.perfilSeleccionado }; // Guardamos los cambios
      console.log('Perfil actualizado:', this.perfilSeleccionado);
    }
    this.cerrarEditor();
  }

  // Función para cerrar el modal de edición
  cerrarEditor(): void {
    this.mostrarEditor = false;
    this.perfilSeleccionado = null;
  }

  // Función para eliminar un perfil
  eliminarPerfil(persona: any): void {
    this.items = this.items.filter(i => i.id !== persona.id);
    console.log('Perfil eliminado:', persona);
  }
}
