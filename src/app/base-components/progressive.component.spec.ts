import { ProgressiveComponent } from './progressive.component';
import { ProgressStages } from '../models/progress.stage.model';
import { from } from 'rxjs';

describe('ProgressiveComponent', () => {
	let component: ProgressiveComponent;
	beforeEach(() => {
		component = new ProgressiveComponent();
		jasmine.clock().install();
	});

	afterEach(() => {
		jasmine.clock().uninstall();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should progress start (progressStart)', () => {
		const setProgress = spyOn(component, 'setProgress').and.callThrough();
		component.progressStart();
		expect(setProgress.calls.argsFor(0)).toEqual([ProgressStages.InProgress]);
	});

	it('should progress succeed (progressSucceed)', () => {
		const setProgress = spyOn(component, 'setProgress').and.callThrough();
		component.progressSucceed();
		expect(setProgress.calls.argsFor(0)).toEqual([ProgressStages.Succeed]);
	});

	it('should progress failed (progressFailed)', () => {
		const setProgress = spyOn(component, 'setProgress').and.callThrough();
		component.progressFailed();
		expect(setProgress.calls.argsFor(0)).toEqual([ProgressStages.Failed]);
	});

	it('should call (setProgress)', () => {
		expect(component.progress).toEqual(ProgressStages.Initial);
		component.setProgress(ProgressStages.Failed);
		jasmine.clock().tick(0);
		expect(component.progress).toEqual(ProgressStages.Failed);
	});

	it('should run success function (onSuccess)', () => {
		spyOn(component, 'progressSucceed').and.callThrough();
		const expectedValue = 'mockData';
		component.onSuccess(expectedValue, (s) => {
			expect(s).toEqual(expectedValue);
		});
		jasmine.clock().tick(0);
		expect(component.progressSucceed).toHaveBeenCalled();
	});

	it('should run failed function (progressFailed) case: 1 with cb', () => {
		spyOn(component, 'progressFailed').and.callThrough();
		const expectedValue = 'mockData';
		component.onFail(expectedValue, (s) => {
			expect(s).toEqual(expectedValue);
		});
		jasmine.clock().tick(0);
		expect(component.progressFailed).toHaveBeenCalled();
	});

	it('should run failed function (progressFailed) case: 2 without cb', () => {
		spyOn(component, 'progressFailed').and.callThrough();
		const expectedValue = 'mockData';
		component.onFail(expectedValue);
		jasmine.clock().tick(0);
		expect(component.progressFailed).toHaveBeenCalled();
	});

	it('should run handle function (handleObservable) case: 1 successful', () => {
		spyOn(component, 'progressStart').and.callThrough();
		const expectedValue = 'mockData';
		const obs = from(Promise.resolve(expectedValue));
		component.handleObservable(obs, (s) => {
			expect(s).toEqual(expectedValue);
		});
		jasmine.clock().tick(0);
		expect(component.progressStart).toHaveBeenCalled();
	});

	it('should run handle function (handleObservable) case: 2 failed', () => {
		spyOn(component, 'progressStart').and.callThrough();
		const expectedValue = 'mockData';
		const obs = from(Promise.reject(expectedValue));
		component.handleObservable(
			obs,
			() => {},
			(s) => {
				expect(s).toEqual(expectedValue);
			}
		);
		jasmine.clock().tick(0);
		expect(component.progressStart).toHaveBeenCalled();
	});

	it('should destroy component (ngOnDestroy)', () => {
		spyOn(component.destroyed$, 'next').and.callThrough();
		spyOn(component.destroyed$, 'complete').and.callThrough();
		component.ngOnDestroy();
		expect(component.destroyed$.next).toHaveBeenCalled();
		expect(component.destroyed$.complete).toHaveBeenCalled();
	});
});
