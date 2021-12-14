import {
  MiddlewareConsumer,
  // MiddlewareConsumer,
  Module,
  NestModule,
  // NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
// import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RolesGuard } from './guards/role.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';
import { logger } from './middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})

// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger) // accepts a list of methods
      .forRoutes(CatsController);
  }
}

// .exclude(
//   { path: 'cats', method: RequestMethod.GET },
//   { path: 'cats', method: RequestMethod.POST },
//   'cats/(.*)',
// )
// .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL }); // wildcards
//   }
