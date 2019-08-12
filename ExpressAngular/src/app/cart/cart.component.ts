import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

export class CartItem {
  constructor(
    public id?: number,
    public product?: string,
    public price?: number,
    public quantity?: number
  ) { }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  newCartItem: CartItem;

  constructor(private cartService: CartService) {
    
   }

  ngOnInit() {
    this.newCartItem = new CartItem();
    this.newCartItem.product = '';
    this.newCartItem.price = 0;
    this.newCartItem.quantity = 0;
    this.cartService.getAllItems().subscribe((res: CartItem[]) => {
      this.cartItems = res;
    })
  }

  deleteCartItem(id: number) {
    this.cartService.deleteCartItem(id).subscribe((res: CartItem[]) => {
      this.cartItems = res;
    })
  }

  addCartItem() {
    this.cartService.addCartItem(this.newCartItem.product, this.newCartItem.price, this.newCartItem.quantity).subscribe((res: CartItem[]) => {
      this.cartItems = res;
    })
  }

  updateCartItem(id: number, product: string, price: number, quantity: number) {
    this.cartService.putCartItem(id, product, price, quantity).subscribe((res: CartItem[]) => {
      alert('item was updated');
      this.cartItems = res;
    })
  }

}
