import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.schema';
import { CreateMovieDTO } from './movie.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class MoviesService {

    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>){}

    async findAll(){
        return this.movieModel.find().exec();
    };

    async findOne(id: string) {
        if (!id || id.trim() === '' || !Types.ObjectId.isValid(id)) {
            throw new BadRequestException('ID inválido');
        }
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new NotFoundException('Película no encontrada');
        }
        return movie;
    }

    async create(createMovieDTO: CreateMovieDTO): Promise<Movie> {
        const movie = new this.movieModel(createMovieDTO);
        return movie.save();
    }
    
    

    async update(id: string, createMovieDTO:CreateMovieDTO){
        return this.movieModel.findByIdAndUpdate(id, createMovieDTO, { new:true }).exec();
    }

    async delete(id: string){
        return this.movieModel.findByIdAndDelete(id).exec();
    }
}
