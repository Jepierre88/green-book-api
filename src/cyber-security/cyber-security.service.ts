import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto, UpdateStudentDto } from './dto/Student.dto.';

@Injectable()
export class CyberSecurityService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) { }


  async getClassStudents() {
    const students = await this.studentModel.find()
    return students
  }

  async createStudent(createStudentDto: CreateStudentDto) {
    const student = await this.studentModel.create(createStudentDto)
    return student
  }

  async updateStudent(DocumentoIdentidad: string, updateStudentDto: UpdateStudentDto) {

    const updateStudent = await this.studentModel.updateOne({ DocumentoIdentidad }, updateStudentDto)

    return updateStudent

  }

  async deleteStudent(DocumentoIdentidad: string) {
    const deletedStudent = await this.studentModel.deleteOne({ DocumentoIdentidad })
    return deletedStudent
  }
}
