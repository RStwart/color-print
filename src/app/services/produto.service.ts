import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  

  private apiUrl = environment.apiUrl; // API  NO ENVIROMENTS

  constructor(private http: HttpClient) {}

  // Método para obter todos os produtos
  getProdutos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos`);
  }

  // Método para obter um produto específico
  getProdutoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos/${id}`);
  }

  // MÉTODO NOVO: Busca apenas categorias (sem produtos)
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }


  // Método para obter produtos por categoria
  getProdutosPorCategoria(categoriaId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos/categoria/${categoriaId}`);
  }

  // Método para adicionar um novo produto (suporta imagem)
  addProduto(produto: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/produtos`, produto);
  }

  // Método para atualizar um produto existente
  updateProduto(id: string, produto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/produtos/${id}`, produto);
  }

  // Método para deletar um produto
  deleteProduto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/produtos/${id}`);
  }

  // Método para fazer upload da imagem
  uploadImagem(imagem: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagem', imagem, imagem.name);
    return this.http.post(`${this.apiUrl}/upload`, formData); // Endpoint de upload
  }

  // Método para obter os usuários (opcional)
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }


  // Método para obter categorias com seus respectivos produtos
  getCategoriasComProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias-com-produtos`);
  }

  // CRUD de variações de produtos

// Criar variação
addVariacao(variacao: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/variacoes`, variacao);
}

// Buscar todas as variações (geral)
getTodasVariacoes(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/variacoes`);
}

// Buscar variações por produto (você já tem esse)
getVariacoesPorProduto(id_produto: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/produtos/${id_produto}/variacoes`);
}

// Atualizar variação
updateVariacao(id_variacao: number, variacao: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/variacoes/${id_variacao}`, variacao);
}

// Deletar variação
deleteVariacao(id_variacao: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/variacoes/${id_variacao}`);
}
  
  
}
