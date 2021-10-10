import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private httpClient: HttpClient){}

    private PICTURE = "https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||257||contestfile_5&flp=1552566302-1651018745c8a481e5ec3f1-65875947.jpg"

    public getHighlightedProductsMocked():Observable<any>{
        return of([
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string1",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string2",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            },
            {
                name: "string3",
                id: "string",
                price: 1,
                picture: this.PICTURE,
                description: "string",
                quantity: 1
            }
        ])
    }

    getHighlightedProducts():Observable<any>{
        return this.httpClient.get('/products/hightlights').pipe()
    }

    getProductById(id:string):Observable<any> {
        return this.httpClient.get(`/products?id=${id}`).pipe()
    }

    getProductByIdMocked(id:string):Observable<any> {
        return of({})
    }
}