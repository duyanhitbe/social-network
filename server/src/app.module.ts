import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ClassSerializerInterceptor, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from './apis/apis.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database.sqlite',
			synchronize: true,
			autoLoadEntities: true,
		}),
		JwtModule.register({
			global: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
			context: ({ req, res }) => ({ req, res }),
			formatError(formattedError) {
				new Logger().error(formattedError.message);
				const extensions = formattedError.extensions;
				const status = extensions?.originalError?.['statusCode'] || 500;
				const code =
					extensions?.originalError?.['error']?.toUpperCase() || 'INTERNAL_SERVER';
				const message = extensions?.originalError?.['message'] || formattedError.message;
				return {
					status,
					code,
					message,
				};
			},
		}),
		ApisModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		AppResolver,
		{
			provide: APP_INTERCEPTOR,
			useClass: ClassSerializerInterceptor,
		},
	],
})
export class AppModule {}
