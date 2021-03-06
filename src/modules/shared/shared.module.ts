import { Module } from '@nestjs/common';

import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { IHelmetConfiguration } from 'helmet';
import { ResponseTimeOptions } from 'response-time';

@Module({
	/* eslint-disable-next-line @typescript-eslint/no-use-before-define */
	exports: [SharedModule]
})
export class SharedModule {
	public configure() {
		HelmetMiddleware.configure(this.getHelmetConfiguration());
		ResponseTimeMiddleware.configure(this.getResponseTimeOptions());
	}

	private getHelmetConfiguration(): IHelmetConfiguration {
		const helmetConfiguration: IHelmetConfiguration = {
			// default helmet configuration
		};

		return helmetConfiguration;
	}

	private getResponseTimeOptions(): ResponseTimeOptions {
		const responseTimeOptions: ResponseTimeOptions = {
			// default response-time options
		};

		return responseTimeOptions;
	}
}
