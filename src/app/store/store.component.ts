import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
// import { StoreProductsService } from '../core';
import { StoreProductsService } from '../core/services/store-products.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

    listFilter: [] = [];
    listProducts: [] = [];
    filterSelected: [] = [];
    totalProducts: number;

    constructor(
        private storeProductsService: StoreProductsService
    ) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.storeProductsService.getProducts().subscribe((response)=>{
            console.log(response);
            this.listFilter = response.listFilter;
            this.listProducts = response.listProduct;
            this.totalProducts = response.listProduct.length;
            this.filterSelected = response.filterSelected;
            console.log('total Productos:', this.filterSelected);
        }, error => {
            console.log('Error de conexión');
        });
    }

}
