import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PublicationsModule } from './publications/publications.module';
import { CyberSecurityModule } from './cyber-security/cyber-security.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI), PublicationsModule, CyberSecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
