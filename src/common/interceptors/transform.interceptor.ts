import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ClassType<T> {
    new(...args): T;
}

export class TransformInterceptor<T> implements NestInterceptor<Partial<T>, T> {

    constructor(private readonly classType: ClassType<T>) {

    }

    intercept(context: ExecutionContext, next: CallHandler<Partial<T>>): Observable<any> {
        return next.handle().pipe(map(data => new this.classType(data)));
    }

}
