import { Body, Controller, Get, Param, Post, Put, Delete, BadRequestException } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './movie.dto';
import { Types } from 'mongoose';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    async findAll(){
        return this.moviesService.findAll()
    }

    // @Get(':id')
    // async findOne(@Param('id') id: string){
    //     return this.moviesService.findOne(id)
    // }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        console.log('ID recibido:', id); // ✅ Depuración
        if (!id || id.trim() === '' || !Types.ObjectId.isValid(id)) {
            throw new BadRequestException('ID inválido');
        }
        return this.moviesService.findOne(id);
}



    @Post()
    async create(@Body() createMovieDTO: CreateMovieDTO){
        console.log("HOlaa")
        return this.moviesService.create(createMovieDTO);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createMovieDTO:CreateMovieDTO){
        return this.moviesService.update(id, createMovieDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.moviesService.delete(id);
    }

    @Post('create')
    async createMovie(@Body() createMovieDto: CreateMovieDTO) {
        return this.moviesService.create(createMovieDto);
}

}
