import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return (
      next
        .handle()
        /* 
          o operador tap() é usado, mas há um amplo conjunto de opções de operadores 
          que podem ser usados para manipular o fluxo recebido por meio do Observable.
        */
        .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)))
    );
  }
}
