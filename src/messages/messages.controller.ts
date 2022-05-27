import { Controller, Get, Post } from '@nestjs/common';
// define routes
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
// :id is wildcard
