import { get } from './http';

export interface IUser {
	oauthId: string;
	name: string;
	picture: string;
	friends: number[];
	stories: number[];
}

export function getProfile(profile: any): Promise<IUser> {
	const profileUrl = `api/profile
				?oauthId=${profile.user_id}
				&name=${profile.name}
				&picture=${profile.picture}`;
	return get(profileUrl);
}
