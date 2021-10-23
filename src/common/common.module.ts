import { AppConfigService } from './config/app-config.service';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: './src/common/config/development.env',
    })],
    providers: [AppConfigService],
    exports: [AppConfigService]
})
export class CommonModule {}