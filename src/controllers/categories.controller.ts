import { Controller, Query, Param, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get(':idCategories/products/:productId')
  getCategories(
    @Param('idCategories') idCategories: string,
    @Param('productId') productId: string,
  ) {
    return `product ${idCategories} and ${productId}`;
  }
}
