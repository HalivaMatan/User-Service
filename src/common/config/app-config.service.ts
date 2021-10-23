import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService{

    constructor(private configService: ConfigService) {}
    
    get DATABASE_URI(): string {
        return this.configService.get("DATABASE_URI");
    }

    get APP_PORT(): number {
        return this.configService.get("APP_PORT");
    }

}