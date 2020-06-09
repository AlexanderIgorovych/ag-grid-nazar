import { SearchItemModel } from './search-item.model';
import { SearchResponsePageInfoModel } from './search-response-page-info.model';

export interface SearchResponseModel {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: SearchResponsePageInfoModel;
	items: SearchItemModel[];
}
