import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductController } from './controllers/products/product.controller';
import { ProductService } from './services/products/product.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
