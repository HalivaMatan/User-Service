import { AppConfigService } from './common/config/app-config.service';
import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule],
  imports: [MongooseModule.forRootAsync({
    imports: [CommonModule],
    useFactory: async (appConfigService: AppConfigService) => ({
      uri: appConfigService.DATABASE_URI,
    }),
    inject: [AppConfigService]
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
