import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'produtos',
        loadComponent: () => import('./tbl-produtos/tbl-produtos.component').then(m => m.TblProdutosComponent)
      },
      {
        path: 'funcionarios',
        loadComponent: () => import('./tbl-funcionarios/tbl-funcionarios.component').then(m => m.TblFuncionariosComponent)
      },
      {
        path: 'mesa',
        loadComponent: () => import('./tbl-mesa/tbl-mesa.component').then(m => m.TblMesasComponent)
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./tbl-pedidos/tbl-pedidos.component').then(m => m.TblPedidosComponent)
      },
      {
        path: 'categorias',
        loadComponent: () => import('./tbl-categorias/tbl-categorias.component').then(m => m.TblCategoriasComponent)
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}


 