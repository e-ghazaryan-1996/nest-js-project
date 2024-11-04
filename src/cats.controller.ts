import { Controller, Get, Param, Post, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  @Redirect('https://nestjs.com', 301)
  create(): string {
    return 'This action adds a new cat';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
