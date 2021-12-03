import {
  // MiddlewareConsumer,
  Module,
  // NestModule,
  // RequestMethod,
} from '@nestjs/common';
// import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
// import { logger } from './middleware/logger.middleware';

@Module({
  imports: [CatsModule],
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
