import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

// Other imports
import { inject, TestBed } from '@angular/core/testing';

import { YoutubeApiService } from './youtube-api.service';
import {
	mockApiResponse,
	mockSearchResultItems,
} from '../../../testing/helpers.spec';

describe('YoutubeApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [YoutubeApiService],
		});
	});

	it('should be created', inject(
		[YoutubeApiService],
		(service: YoutubeApiService) => {
			expect(service).toBeTruthy();
		}
	));

	it('should get youtube video data from API (getData())', inject(
		[YoutubeApiService, HttpTestingController],
		(service: YoutubeApiService, backend: HttpTestingController) => {
			spyOn(service, 'returnMapData').and.returnValue(mockSearchResultItems);
			service.getData().subscribe((videos) => {
				expect(service.returnMapData).toHaveBeenCalledWith(mockApiResponse);
				expect(videos[0]).toEqual(mockSearchResultItems[0]);
			});
			backend
				.expectOne({
					method: 'GET',
					url: service.youtubeURL,
				})
				.flush(mockApiResponse);
		}
	));

	it('should be SearchResultItemModel[] (returnMapData())', inject(
		[YoutubeApiService],
		(service: YoutubeApiService) => {
			expect(service.returnMapData(mockApiResponse)).toContain(
				mockSearchResultItems[0]
			);
		}
	));
});
