import { Injectable } from '@nestjs/common';
import { Publication } from './schemas/publication.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createPublicationDto } from './dto/PublicationDto';

@Injectable()
export class PublicationsService {

    constructor(@InjectModel(Publication.name) private publicationModel: Model<Publication>) { }

    async getPublications() {
        try {
            const publications: Array<Publication> = await this.publicationModel.find()
            return publications
        } catch (error) {
            throw new Error(error)
        }
    }
    async getPublicationById(id: string) {
        try {
            const publication: Array<Publication> = await this.publicationModel.find({ id: id });
            return publication
        } catch (error) {
            throw new Error(error);
        }
    }
    async createPublication(createPublicationDto: createPublicationDto) {
        try {
            const publication: Publication = await this.publicationModel.create(createPublicationDto)
            return publication;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
