declare const fetch: IFetch;

declare interface IFetch {
	(url: string): Promise<any>;
	(request: any): Promise<any>;
}

declare const Request: any;
