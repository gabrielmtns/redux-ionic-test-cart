import { Component,  } from '@angular/core';

import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
})
export class ProductsPage {

  public products : Product[] = [
     {
      _id: "AB31" , 
      category: "tecnology", 
      description: "Super notebook!" , 
      price: 4000, 
      title : "Notebook Dell", 
      images: ["../../../../../assets/imgs/notebook.jpg"]
    },
    {
      _id: "AB31" , 
      category: "tecnology", 
      description: "Amazig ipad, max of perfomace!" , 
      price: 2400, 
      title : "Tablet ", 
      images: ["../../../../../assets/imgs/tablet.jpg"]
    }

  ]
  constructor(
  ) {
  
  }

}
