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

    // async findOne(id:string){
    //     return this.movieModel.findById(id).exec();
    // }

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
    

    // async create(createMovieDTO: CreateMovieDTO){
    //     const movie = new this.movieModel(createMovieDTO);
    //     return movie.save();
    // }


    async create(createMovieDTO: CreateMovieDTO) {
        try {
            const movie = new this.movieModel(createMovieDTO);
            return await movie.save();
        } catch (error) {
            console.error('Error al guardar película:', error); // ✅ Depuración
            throw new BadRequestException('No se pudo guardar la película');
        }
    }
    

    async update(id: string, createMovieDTO:CreateMovieDTO){
        return this.movieModel.findByIdAndUpdate(id, createMovieDTO, { new:true }).exec();
    }

    async delete(id: string){
        return this.movieModel.findByIdAndDelete(id).exec();
    }
}
