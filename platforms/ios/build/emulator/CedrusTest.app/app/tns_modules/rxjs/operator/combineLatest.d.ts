import { Observable, ObservableInput } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
export declare function combineLatest<T, R>(this: Observable<T>, project: (v1: T) => R): Observable<R>;
export declare function combineLatest<T, T2, R>(this: Observable<T>, v2: ObservableInput<T2>, project: (v1: T, v2: T2) => R): Observable<R>;
export declare function combineLatest<T, T2, T3, R>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, project: (v1: T, v2: T2, v3: T3) => R): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, R>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, T5, R>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, T5, T6, R>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): Observable<R>;
export declare function combineLatest<T, T2>(this: Observable<T>, v2: ObservableInput<T2>): Observable<[T, T2]>;
export declare function combineLatest<T, T2, T3>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<[T, T2, T3]>;
export declare function combineLatest<T, T2, T3, T4>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<[T, T2, T3, T4]>;
export declare function combineLatest<T, T2, T3, T4, T5>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<[T, T2, T3, T4, T5]>;
export declare function combineLatest<T, T2, T3, T4, T5, T6>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<[T, T2, T3, T4, T5, T6]>;
export declare function combineLatest<T, R>(this: Observable<T>, ...observables: Array<ObservableInput<T> | ((...values: Array<T>) => R)>): Observable<R>;
export declare function combineLatest<T, R>(this: Observable<T>, array: ObservableInput<T>[]): Observable<Array<T>>;
export declare function combineLatest<T, TOther, R>(this: Observable<T>, array: ObservableInput<TOther>[], project: (v1: T, ...values: Array<TOther>) => R): Observable<R>;
export declare class CombineLatestOperator<T, R> implements Operator<T, R> {
    private project;
    constructor(project?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class CombineLatestSubscriber<T, R> extends OuterSubscriber<T, R> {
    private project;
    private active;
    private values;
    private observables;
    private toRespond;
    constructor(destination: Subscriber<R>, project?: (...values: Array<any>) => R);
    protected _next(observable: any): void;
    protected _complete(): void;
    notifyComplete(unused: Subscriber<R>): void;
    notifyNext(outerValue: T, innerValue: R, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, R>): void;
    private _tryProject(values);
}
