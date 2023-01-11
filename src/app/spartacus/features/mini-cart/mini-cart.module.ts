import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CmsConfig, I18nModule, provideConfig, UrlModule } from "@spartacus/core";
import { IconModule, ItemCounterModule, MediaModule, MiniCartModule } from "@spartacus/storefront";
import { EcoMiniCartComponent } from "./components/eco-mini-cart/eco-mini-cart.component";
import { MiniCartItemListComponent } from './components/mini-cart-item-list/mini-cart-item-list.component';
import { MiniCartItemComponent } from './components/mini-cart-item/mini-cart-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UrlModule,
        IconModule,
        I18nModule,
        ItemCounterModule,
        MediaModule
    ],
    declarations: [
        EcoMiniCartComponent,
        MiniCartItemListComponent,
        MiniCartItemComponent
    ],
    providers: [
        provideConfig({
            cmsComponents: {
                MiniCartComponent: {
                    component: EcoMiniCartComponent
                }
            }
        } as CmsConfig)
    ]
})

export class EcoMiniCartModule {

}