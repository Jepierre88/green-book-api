import { Module } from '@nestjs/common';
import { CyberSecurityController } from './cyber-security.controller';
import { CyberSecurityService } from './cyber-security.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schemas/student.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
  controllers: [CyberSecurityController],
  providers: [CyberSecurityService]
})
export class CyberSecurityModule { }
