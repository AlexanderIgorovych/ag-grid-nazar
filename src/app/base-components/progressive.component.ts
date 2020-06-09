import { Observable, ReplaySubject } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { IProgressStage, ProgressStages } from '../models/progress.stage.model';
import { takeUntil } from 'rxjs/operators';

export class ProgressiveComponent implements OnDestroy {
	public destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
	public progress: IProgressStage = ProgressStages.Initial;

	ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public handleObservable<T>(
		observable: Observable<T>,
		onSuccess: (result: T) => void,
		onFail?: (error: T) => void
	): void {
		this.progressStart();
		observable.pipe(takeUntil(this.destroyed$)).subscribe(
			(result) => this.onSuccess(result, onSuccess),
			(error) => this.onFail(error, onFail)
		);
	}

	public onSuccess<T>(result: T, onSuccess: (result: T) => void): void {
		this.progressSucceed();
		setTimeout((_) => onSuccess(result));
	}

	public onFail<T>(error: T, onFail?: (error: T) => void): void {
		this.progressFailed();
		if (onFail) {
			setTimeout((_) => onFail(error));
		}
	}

	public progressStart(): void {
		this.setProgress(ProgressStages.InProgress);
	}

	public progressSucceed(): void {
		this.setProgress(ProgressStages.Succeed);
	}

	public progressFailed(): void {
		this.setProgress(ProgressStages.Failed);
	}

	public setProgress(progress: IProgressStage): void {
		setTimeout((_) => (this.progress = progress));
	}
}
