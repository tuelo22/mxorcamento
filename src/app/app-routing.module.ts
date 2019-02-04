import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'enderecos', loadChildren: './pages/enderecos/enderecos.module#EnderecosPageModule'},
  { path: 'enderecos-cliente', loadChildren: './pages/enderecos-cliente/enderecos-cliente.module#EnderecosClientePageModule'},
  { path: 'novo-endereco', loadChildren: './pages/novo-endereco/novo-endereco.module#NovoEnderecoPageModule'},
  { path: 'itens', loadChildren: './pages/itens/itens.module#ItensPageModule' },
  { path: 'orcamento-editar', loadChildren: './pages/orcamento-editar/orcamento-editar.module#OrcamentoEditarPageModule' },
  { path: 'orcamento-novo', loadChildren: './pages/orcamento-novo/orcamento-novo.module#OrcamentoNovoPageModule' },
  { path: 'item-novo', loadChildren: './pages/item-novo/item-novo.module#ItemNovoPageModule' },
  { path: 'item-editar', loadChildren: './pages/item-editar/item-editar.module#ItemEditarPageModule' },
  { path: 'endereco-novo', loadChildren: './pages/endereco-novo/endereco-novo.module#EnderecoNovoPageModule' },
  { path: 'endereco-editar', loadChildren: './pages/endereco-editar/endereco-editar.module#EnderecoEditarPageModule' },
  { path: 'configuracoes', loadChildren: './pages/configuracoes/configuracoes.module#ConfiguracoesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
