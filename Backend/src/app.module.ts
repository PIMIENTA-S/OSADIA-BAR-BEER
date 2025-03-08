import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/proveedorDB'),
    MongooseModule.forRoot('mongodb://localhost:27017/moviesDB'),
    MoviesModule,
    ProvidersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
