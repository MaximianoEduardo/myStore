import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { CartItemComponent, CartItemContext, CartItemContextSource, MediaContainer } from '@spartacus/storefront';

@Component({
  selector: 'eco-app-mini-cart-item',
  templateUrl: './mini-cart-item.component.html',
  styleUrls: ['./mini-cart-item.component.scss'],
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource}
  ]
})
export class MiniCartItemComponent extends CartItemComponent {

  @Input()
  set control(value: FormControl | AbstractControl | null){
    this.quantityControl = value as any;
  }

  get imageContainer() : MediaContainer{
    return this.item?.product?.images?.PRIMARY as MediaContainer;
  }


}
