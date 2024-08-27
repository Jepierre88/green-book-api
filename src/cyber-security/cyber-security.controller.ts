import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CyberSecurityService } from './cyber-security.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/Student.dto.';

@Controller('cyber-security')
export class CyberSecurityController {
  constructor(private readonly cyberSecurityService: CyberSecurityService) { }
  @Get('/')
  async getInformacionClase(@Res() res: Response) {
    try {
      const estudiantes = await this.cyberSecurityService.getClassStudents()
      return res.status(200).json(
        {
          nombre: "Fundamentos en suguridad informática",
          horaInicio: "16:00:00",
          horaFin: "18:00:00",
          estudiantes
        }
      )
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }

  }
  @Post("/create-student")
  async createStudent(@Res() res: Response, @Body() req: CreateStudentDto) {
    try {
      const student = await this.cyberSecurityService.createStudent(req)
      if (!student) throw new Error(`Student could not be created`)
      return res.status(200).json({
        message: "Student created",
        student: student
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
  @Patch("/update-student/:id")
  async updateStudent(@Res() res: Response, @Body() req: UpdateStudentDto, @Param("id") id: string) {

    try {
      const student = await this.cyberSecurityService.updateStudent(id, req)
      if (!student || student.modifiedCount <= 0) throw new Error(`Student could not be updated`)
      return res.status(200).json({
        message: "Student updated",
        student
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }

  }
  @Delete("/delete-student/:id")
  async deleteStudent(@Res() res: Response, @Param("id") id: string) {
    try {
      const deleteStudent = await this.cyberSecurityService.deleteStudent(id)
      if (!deleteStudent || deleteStudent.deletedCount <= 0) throw new Error(`Student could not be deleted`)
      return res.status(200).json({
        message: "Student deleted",
        deleteStudent
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}
