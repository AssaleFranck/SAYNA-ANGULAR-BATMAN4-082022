import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public products = [
    {
      id: 1,
      title: "Produit 1",
      price: 2000,
      imgUrl:'../../../assets/articles/article_1.png'
    },
    {
      id: 2,
      title: "Produit 2",
      price: 3000,
      imgUrl:'../../../assets/articles/article_2.png'
    },
    {
      id: 3,
      title: "Produit 3",
      price: 4000,
      imgUrl:'../../../assets/articles/article_3.png'
    },
    {
      id: 4,
      title: "Produit 4",
      price: 7000,
      imgUrl:'../../../assets/articles/article_4.png'
    },
  ];
  // public products:any;

  constructor(private api:ApiProductsService) {}

  ngOnInit(): void {
    // this.api.getProducts().subscribe((res)=>{
    //   this.products = res;
    // })
  }
  
}
