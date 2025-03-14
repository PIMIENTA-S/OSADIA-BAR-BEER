import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './movie.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}])],
  providers: [MoviesService],
  controllers: [MoviesController],
  // exports: [movi]
})
export class MoviesModule {}
