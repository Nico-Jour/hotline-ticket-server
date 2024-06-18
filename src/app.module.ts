import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotlinersModule } from './hotliners/hotliners.module';

@Module({
  imports: [HotlinersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
