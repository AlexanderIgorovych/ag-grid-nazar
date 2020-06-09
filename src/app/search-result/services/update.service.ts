import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UpdateService {
	public notify$ = new Subject<any>();
	public notifyObservable$ = this.notify$.asObservable();
	public notifyHeaderCheckbox(data: { option: string; value: boolean }) {
		this.notify$.next(data);
	}
}
