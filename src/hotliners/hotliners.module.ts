import { Module } from '@nestjs/common';
import { HotlinersController } from './hotliners.controller';
import { HotlinersService } from './hotliners.service';

@Module({
  controllers: [HotlinersController],
  providers: [HotlinersService],
})
export class HotlinersModule {}
