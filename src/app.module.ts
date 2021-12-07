import {
  // MiddlewareConsumer,
  Module,
  // NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
// import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RolesGuard } from './guards/role.guard';
import { ValidationPipe } from './pipes/validation.pipe';
// import { logger } from './middleware/logger.middleware';

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
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(logger) // accepts a list of methods
// .exclude(
//   { path: 'cats', method: RequestMethod.GET },
//   { path: 'cats', method: RequestMethod.POST },
//   'cats/(.*)',
// )
// .forRoutes(CatsController);
// .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL }); // wildcards
//   }
// }
