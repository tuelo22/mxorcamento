import { Item } from '../item/item';

export class Orcamento {
    OrdemVenda: string;
    CodigoEmpresa: string;
    CodigoFilial: string;
    CodigoCliente: string;
    DescricaoCliente: string;
    CodigoCondicaoPagamento: string;
    CodigoEnderecoEntrega: string;
    CodigoTipoEntrega: string;
    Validade: string;
    PrazoEntrega: string;
    Observacao: string;
    ItensOrcamentoVendas: Item[] = [];
    Total: number;
}
