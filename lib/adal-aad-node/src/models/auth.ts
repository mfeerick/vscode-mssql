import { Deferred } from "./util";
import { AzureAccount } from "./account";

export interface LoginResponse {
    response: OAuthTokenResponse;
    authComplete: Deferred<AzureAccount>;
}

export interface OAuthTokenResponse {
    accessToken: AccessToken;
    refreshToken: RefreshToken;
    tokenClaims: TokenClaims;
    expiresOn: string;
}

export interface AccessToken {

}

export interface TokenKey {
	/**
	 * Account Key - uniquely identifies an account
	 */
	key: string;
}

export interface AccessToken extends TokenKey {
	/**
	 * Access Token
	 */
	token: string;
}

export interface Token extends AccessToken {
	/**
	 * TokenType
	 */
	tokenType: string;
}

export interface RefreshToken extends TokenKey {
	/**
	 * Refresh Token
	 */
	token: string;
}

export interface TokenClaims { // https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens
	aud: string;
	iss: string;
	iat: number;
	idp: string;
	nbf: number;
	exp: number;
	home_oid?: string;
	c_hash: string;
	at_hash: string;
	aio: string;
	preferred_username: string;
	email: string;
	name: string;
	nonce: string;
	oid?: string;
	roles: string[];
	rh: string;
	sub: string;
	tid: string;
	unique_name: string;
	uti: string;
	ver: string;
}