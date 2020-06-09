import { SearchResultItemModel } from '../app/models/search-result-item/search-item-title.model';
import { SearchResponseModel } from '../app/models/youtube-api/search/search-response.model';

export const mockApiResponse: SearchResponseModel = {
	kind: 'youtube#searchListResponse',
	etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/iyc47VGCo8anmYMNz8IFRSp7uls"',
	nextPageToken: 'CDIQAA',
	regionCode: 'UA',
	pageInfo: {
		totalResults: 1000000,
		resultsPerPage: 50,
	},
	items: [
		{
			kind: 'youtube#searchResult',
			etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Kq-9mzFf1I2LRyeEko4DAb5CdBA"',
			id: {
				kind: 'youtube#video',
				videoId: '3fumBcKC6RE',
			},
			snippet: {
				publishedAt: '2011-05-12T20:01:31.000Z',
				channelId: 'UCEOhcOACopL42xyOBIv1ekg',
				title:
					'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
				description:
					'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
				channelTitle: 'LilWayneVEVO',
				liveBroadcastContent: 'none',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
			},
		},
	],
};
export const mockSearchResultItems = [
	{
		description:
			'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
		publishedAt: '2011-05-12T20:01:31.000Z',
		thumbnail: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
		title: {
			link: 'https://www.youtube.com/watch?v=3fumBcKC6RE',
			text: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
		},
	},
	{
		description:
			'Are You Sleeping Brother John song | 동요와 아이 노래 | 어린이 교육 www.youtube.com/channel/UCiVsuTSKIdhxaWZFAP_1XSQ?sub_confirmation=1 ...',
		publishedAt: '2019-03-24T08:04:15.000Z',
		thumbnail: 'https://i.ytimg.com/vi/MYO4jUFqAhA/default.jpg',
		title: {
			link: 'https://www.youtube.com/watch?v=MYO4jUFqAhA',
			text:
				'Are You Sleeping Brother John song |  동요와 아이 노래 | 어린이 교육',
		},
	},
] as SearchResultItemModel[];

export const mockParamsNgGrid = {
	setColumnVisible: () => { },
};
export const mockICellRendererParamsNgGrid = {
	value: {
		text: 'mockText',
		link: 'mockLink',
	},
};
export const mockIToolPanelParamsNgGrid = {
	api: {
		addEventListener: (eventType: string, listener: (value) => void) => { },
		forEachNode: (cb: (value) => void) => cb({ selectThisNode: () => { } }),
	},
	columnApi: {},
};

export const mockICellRendererAngularCompNgGrid = {
	node: { selectThisNode: () => { } },
	api: {
		forEachNode: (cb: (value) => void) => cb({ selectThisNode: () => { } }),
	},
};
