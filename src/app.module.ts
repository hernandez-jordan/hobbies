import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HobbyModule } from './hobby/hobby.module';

@Module({
  imports: [HobbyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
