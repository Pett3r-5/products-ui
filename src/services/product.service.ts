import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private httpClient: HttpClient){}

    public getHighlightedProductsMocked():Observable<any>{
        return of([
            {
                name: "string1",
                id: "string",
                price: "number",
                picture: "string",
                description: "string",
                quantity: "number"
            },
            {
                name: "string2",
                id: "string",
                price: "number",
                picture: "string",
                description: "string",
                quantity: "number"
            },
            {
                name: "string3",
                id: "string",
                price: "number",
                picture: "string",
                description: "string",
                quantity: "number"
            }
        ])
    }

    getHighlightedProducts():Observable<any>{
        return this.httpClient.get('/products/hightlights').pipe()
    }

    getProductById(id:string):Observable<any> {
        return this.httpClient.get(`/products?id=${id}`).pipe()
    }
}