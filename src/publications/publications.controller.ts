import { Body, Controller, Get, HttpStatus, Param, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publication } from './schemas/publication.schema';
import { PublicationsService } from './publications.service';
import { Response } from 'express';
import { createPublicationDto } from './dto/PublicationDto';

@Controller('publications')
export class PublicationsController {
    constructor(private readonly publicationService: PublicationsService) { }

    @Get("/")
    async getPublications(@Res() res: Response) {
        try {
            const publications = await this.publicationService.getPublications()
            if (publications.length <= 0) return res.status(HttpStatus.NOT_FOUND).json(["No publications found"])

            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: publications })

        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json([error.message])
        }
    }
    @Get("/:id")
    async getPublicationById(@Param("id") id: string, @Res() res: Response) {
        try {
            const publication = await this.publicationService.getPublicationById(id)
            if (!publication) return res.status(HttpStatus.NOT_FOUND).json(["Publication not found"])
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: publication })
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json([error.message])
        }
    }
    @UsePipes(new ValidationPipe())
    @Post("")
    async createPublication(@Body() createPublicationDto: createPublicationDto, @Res() res: Response) {
        try {
            const publication = await this.publicationService.createPublication(createPublicationDto)
            if (!publication) return res.status(HttpStatus.BAD_REQUEST).json(["Publication was not created"])
            return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: publication })
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json([error.message])
        }
    }

}
