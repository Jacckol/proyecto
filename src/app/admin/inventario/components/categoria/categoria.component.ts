import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Categoria {
  id: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [
    { id: 1, nombre: 'Tecnología', detalle: 'Categoría relacionada con tecnología' },
    { id: 2, nombre: 'Hogar', detalle: 'Categoría para productos del hogar' },
    { id: 3, nombre: 'Deportes', detalle: 'Artículos relacionados con deportes' },
  ];
  
  dialog_visible: boolean = false;
  categoria_id: number = -1;
  
  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl(''),
  });

  ngOnInit(): void {}

  mostrarDialog() {
    this.categoriaForm.reset(); // Resetea el formulario
    this.categoria_id = -1; // Reinicia el ID para nueva categoría
    this.dialog_visible = true; // Abre el diálogo
  }

  guardarCategoria() {
    if (this.categoriaForm.invalid) {
      alert('El campo "Nombre" es obligatorio.');
      return;
    }

    const nuevaCategoria: Categoria = {
      id: this.categoria_id > 0 ? this.categoria_id : this.generarId(),
      nombre: this.categoriaForm.value.nombre!,
      detalle: this.categoriaForm.value.detalle!,
    };

    if (this.categoria_id > 0) {
      // Editar categoría existente
      const index = this.categorias.findIndex(cat => cat.id === this.categoria_id);
      this.categorias[index] = nuevaCategoria;
    } else {
      // Crear nueva categoría
      this.categorias.push(nuevaCategoria);
    }

    this.dialog_visible = false; // Cierra el diálogo
    this.categoriaForm.reset(); // Limpia el formulario
  }

  editarCategoria(cat: Categoria) {
    this.categoria_id = cat.id; // Almacena el ID de la categoría a editar
    this.categoriaForm.setValue({
      nombre: cat.nombre,
      detalle: cat.detalle,
    });
    this.dialog_visible = true; // Abre el diálogo
  }

  eliminarCategoria(cat: Categoria) {
    this.categorias = this.categorias.filter(c => c.id !== cat.id);
  }

  generarId(): number {
    return this.categorias.length > 0
      ? Math.max(...this.categorias.map(cat => cat.id)) + 1
      : 1;
  }
}
