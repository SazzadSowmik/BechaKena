import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }
  addNewProduct(form: any){
    let newProduct = {
      id : 112,
      title: form.value.product_name,
      category_id: form.value.product_category,
      description: form.value.product_description,
      price: form.value.product_price,
      is_available: 1,
      productImg: '',
      rating: form.value.product_rating,
      review: form.value.product_review,
      vendor_name: form.value.product_vendor,
    };
    this.productService.createProduct(newProduct).subscribe(data=>{

    });
  }

}
