import { SearchItemIdModel } from './search-item-id.model';
import { SearchItemSnippetModel } from './search-item-snippet.model';

export interface SearchItemModel {
	kind: string;
	etag: string;
	id: SearchItemIdModel;
	snippet: SearchItemSnippetModel;
}
