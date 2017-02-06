declare const fetch: IFetch;

declare interface IFetch {
	(url: string): Promise<any>;
	(options: any): Promise<any>;
}
