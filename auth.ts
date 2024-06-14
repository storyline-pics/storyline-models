export interface AuthInfo {
	accessToken: string;
	refreshToken: RefreshToken;
}

export interface RefreshToken {
	value: string;
	expiration: Date;
}

export interface JWTPayload {
	sub: string;
	exp: number;
	type: 'user' | 'guest';
}

export interface JWTResponse {
	jwt: string;
}
