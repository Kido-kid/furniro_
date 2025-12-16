import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { ProductRangeComponent } from './product-range/product-range.component';
import { PreviewProductComponent } from './preview-product/preview-product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,AdBannerComponent,ProductRangeComponent,PreviewProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Furniro';
}
