declare const fetch: IFetch;

declare interface IFetch {
	(url: string): Promise<any>;
	(request: any): Promise<any>;
}

declare const Request: any;
declare const Headers: any;

declare interface Headers {}
