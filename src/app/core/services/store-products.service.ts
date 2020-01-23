import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StoreProductsService {

    constructor( private api: ApiService) {}

    getProducts(): Observable<any> {
        return this.api.get('http://localhost:3000/store-patinetas').pipe(map((response:any) => {
            return response
        }));
    }

    getListOrder(): Observable<Object[]> {
        return of( [
            {id: '1', text: 'Precio menor a mayor' },
            {id: '2', text: 'Precio mayor a menor'},
            {id: '3', text: 'Nombre de A a Z'},
            {id: '4', text: 'Nombre de Z a A'},
            {id: '5', text: 'Mejor calificación'},
        ])
    }
}
