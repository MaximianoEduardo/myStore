import { Component } from "@angular/core";
import { MiniCartComponent } from "@spartacus/storefront";
import { map } from "rxjs/operators"

@Component({
    selector: 'cx-mini-cart',
    templateUrl: './eco-mini-cart.component.html',
    styleUrls: ['./eco-mini-cart.component.scss']
})

export class EcoMiniCartComponent extends MiniCartComponent{

    open  = false;
    cart$ = this.activeCartService.getActive();


    totals$ = this.cart$.pipe(
        map(cart => {
          const deliveryCost = cart.deliveryCost?.value ? cart.deliveryCost.formattedValue : 'TBD';
          return [
            { property: 'subtotal', label: 'Subtotal', value: cart.subTotal?.formattedValue },
            { property: 'deliveryCost', label: 'Delivery Cost', value: deliveryCost },
            { property: 'totalDiscounts', label: 'Discounts', value: cart.totalDiscounts?.formattedValue },
            { property: 'totalPriceWithTax', label: 'Total with tax', value: cart.totalPriceWithTax?.formattedValue },
          ];
        })
      );

    toogle(): void{

        this.open = !this.open;

    }

}