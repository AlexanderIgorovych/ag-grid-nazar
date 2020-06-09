import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { SearchResponseModel } from '../../models/youtube-api/search/search-response.model';
import { SearchResultItemModel } from '../../models/search-result-item/search-item-title.model';
import { SearchResultItemTitleModel } from '../../models/search-result-item/search-item.model';

@Injectable()
export class YoutubeApiService {
	private YOUTUBE_TOKEN = 'AIzaSyAYN2cy1wz_D_tuEtsay07b7iobJMDSvsY';
	public youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${this.YOUTUBE_TOKEN}&maxResults=50&type=video&part=snippet&q=john`;
	constructor(private http: HttpClient) {}

	/** GET video data from the Youtube Api */
	public getData(): Observable<SearchResponseModel> {
		return this.http.get<any>(this.youtubeURL).pipe(
			map((data) => this.returnMapData(data)),
			tap(() => this.log(`fetched videos`))
		) as Observable<SearchResponseModel>;
	}
	public returnMapData(
		data: SearchResponseModel
	): Array<SearchResultItemModel> {
		return data.items.map((val) => {
			return {
				publishedAt: val.snippet.publishedAt,
				title: {
					text: val.snippet.title,
					link: `${'https://www.youtube.com/watch?v='}${val.id.videoId}`,
				} as SearchResultItemTitleModel,
				description: val.snippet.description,
				thumbnail: val.snippet.thumbnails.default.url,
			} as SearchResultItemModel;
		});
	}

	private log(message: string) {
		console.log('YoutubeApiService: ' + message);
	}
}
