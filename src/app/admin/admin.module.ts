import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TableModule } from 'primeng/table'; 
import { ToolbarModule } from 'primeng/toolbar'; 
import { ButtonModule } from 'primeng/button'; 
import { DialogModule } from 'primeng/dialog'; 

import { AdminRoutingModule } from './admin-routing.module'; 
import { PerfilComponent } from './components/perfil/perfil.component'; 
import { AdministradorComponent } from './components/cliente/administrador.component'; 
import { LayoutComponent } from './layout/layout.component'; 
import { AppLayoutModule } from './layout/app.layout.module'; 
import { CategoriaService } from './inventario/services/categoria.service'; 
import { ProductoService } from './inventario/services/producto.service'; 
import { InventarioModule } from './inventario/inventario.module'; 
import { PedidoModule } from './pedido/pedido.module'; // Importa PedidoModule

@NgModule({
  declarations: [
    PerfilComponent,
    AdministradorComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InventarioModule,
    PedidoModule
  ],
  providers: [
    CategoriaService,
    ProductoService
  ],
  schemas: [NO_ERRORS_SCHEMA]  // Agregar esta línea
})
export class AdminModule { }
