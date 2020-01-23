import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Accept': 'application/json',
        };

        const request = req.clone({ setHeaders: headersConfig });

        return next.handle(request).pipe(
            map(event => {
                if ( event instanceof HttpResponse) {
                    if (event.status == 500) console.log(`Error. No se logró consumir el servicio de ${event.url}`)
                }
                return event;
            })
        );
    }

}
