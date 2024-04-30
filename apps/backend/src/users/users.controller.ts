import { Controller, Get, HttpCode, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'all users';
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number): string {
    return `one user #${id}`;
  }
}
