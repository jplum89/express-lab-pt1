import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { 
  }

  getAllItems() {
    return this.http.get('http://localhost:8000/cart-items');
  }

  deleteCartItem(id) {
    return this.http.delete(`http://localhost:8000/cart-items/${id}`)
  }

  addCartItem(product: string, price: number, quantity: number) {
    const data = {product, price, quantity};
    return this.http.post('http://localhost:8000/cart-items', data);
  }

  putCartItem(id: number, product: string, price: number, quantity: number) {
    const data = {product, price, quantity};
    return this.http.put(`http://localhost:8000/cart-items/${id}`, data);
  }
}
