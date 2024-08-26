import { Request, Response } from 'express';

declare global {
	type Ctx = {
		req: Request & {
			user: {
				sub: string;
			};
		};
		res: Response;
	};
}

export {};
