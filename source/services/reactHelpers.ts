import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

export function watch<T>(obs$: Observable<T>, onNext: { (data: T): void }, component: any): void {
	component.subscription = obs$.subscribe(data => onNext(data));
	component.componentWillUnmount = () => component.subscription.unsubscribe();
}
