import { async, inject, TestBed } from '@angular/core/testing';

// Other imports
import { UpdateService } from './update.service';

describe('UpdateService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [UpdateService],
		});
	});
	it('should be created', inject([UpdateService], (service: UpdateService) => {
		expect(service).toBeTruthy();
	}));

	it('notifyHeaderCheckbox if value false', async(
		inject([UpdateService], (service: UpdateService) => {
			service.notifyObservable$.subscribe((res) => {
				expect(res).toEqual({ option: 'notifyForTest', value: false });
			});
			service.notifyHeaderCheckbox({ option: 'notifyForTest', value: false });
		})
	));

	it('notifyHeaderCheckbox if value true', async(
		inject([UpdateService], (service: UpdateService) => {
			service.notifyObservable$.subscribe((res) => {
				expect(res).toEqual({ option: 'notifyForTest', value: true });
			});
			service.notifyHeaderCheckbox({ option: 'notifyForTest', value: true });
		})
	));
});
