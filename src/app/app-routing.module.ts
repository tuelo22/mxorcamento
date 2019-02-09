import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'enderecos', loadChildren: './pages/enderecos/enderecos.module#EnderecosPageModule'},
  { path: 'enderecos-cliente', loadChildren: './pages/enderecos-cliente/enderecos-cliente.module#EnderecosClientePageModule'},
  { path: 'itens', loadChildren: './pages/itens/itens.module#ItensPageModule' },
  { path: 'orcamento-editar', loadChildren: './pages/orcamento-editar/orcamento-editar.module#OrcamentoEditarPageModule' },
  { path: 'orcamento-novo', loadChildren: './pages/orcamento-novo/orcamento-novo.module#OrcamentoNovoPageModule' },
  { path: 'item-novo', loadChildren: './pages/item-novo/item-novo.module#ItemNovoPageModule' },
  { path: 'item-editar', loadChildren: './pages/item-editar/item-editar.module#ItemEditarPageModule' },
  { path: 'endereco-novo', loadChildren: './pages/endereco-novo/endereco-novo.module#EnderecoNovoPageModule' },
  { path: 'endereco-editar', loadChildren: './pages/endereco-editar/endereco-editar.module#EnderecoEditarPageModule' },
  { path: 'orcamentos', loadChildren: './pages/orcamentos/orcamentos.module#OrcamentosPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'orcamento-versao', loadChildren: './pages/orcamento-versao/orcamento-versao.module#OrcamentoVersaoPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
