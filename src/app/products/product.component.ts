import { Component } from "@angular/core";
import {IProduct} from './product.model';

@Component({
  selector: "app-prod",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  title: string = "Product app";
  desc: string = "Products List";
  imageWidth: number = 80;
  showTable: boolean = true;
  showImage: boolean = true;
  userInput: string = "";
  product: IProduct[] = [
    {
      _id: "5a05dacc734d1d68d42d31f3",
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2016",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.5,
      imageUrl:
        "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      _id: "5a05dacc734d1d68d42d31f4",
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2016",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.5,
      imageUrl:
        "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
