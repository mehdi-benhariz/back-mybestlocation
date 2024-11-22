import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { redisStore } from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';
import { PrismaService } from './prisma.service';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    CacheModule.register({
      // @ts-ignore
      store: async () => {
        try {
          return await redisStore({
            socket: {
              host: 'localhost',
              port: 6379,
            },
          });
        } catch (error) {
          console.error('Failed to connect to Redis:', error);
        }
      },
      isGlobal: true,
    }),
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
