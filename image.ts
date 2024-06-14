import { ParsedUrlQuery } from 'querystring';

export interface UploadImageRequest extends ParsedUrlQuery {
	imageId: string;
	albumId: string;
}

export interface DeleteImageRequest {
	imageId: string;
	albumId: string;
}
