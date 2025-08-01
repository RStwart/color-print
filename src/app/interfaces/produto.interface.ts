export interface Produto {
  id_produto: number;
  nome: string;
  descricao?: string;
  preco: number;
  quantidade_estoque?: number; // Mantido para compatibilidade
  imagem?: File | null;
  imagemUrl?: string;
  categoria?: string; // String para exibição
  id_categoria?: number; // Adicionado para referência ao ID
  destaque?: boolean; // Adicionado
  estoque?: number; //quantidade_estoque
    variacoes?: {
    id_variacao: number;
    nome_variacao: string;
    descricao_opcao: string;
    preco_adicional: number;
  }[];
}