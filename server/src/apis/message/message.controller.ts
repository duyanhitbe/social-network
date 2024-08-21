import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { UseUserGuard } from 'src/decorators/use-user-guard.decorator';
import { MessageInterceptor } from 'src/interceptors/message.interceptor';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageService } from './message.service';

@Controller('message')
@UseUserGuard()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto, @CurrentUser() user: any) {
    const userId = user.sub;
    return this.messageService.create({ ...createMessageDto, userId });
  }

  @Get()
  @SetMetadata('METHOD', 'FIND_ALL')
  @UseInterceptors(MessageInterceptor)
  findAll() {
    return this.messageService.findAll();
  }

  @Get('room/:roomId')
  @SetMetadata('METHOD', 'FIND_ALL')
  @UseInterceptors(MessageInterceptor)
  findAllByRoom(@Param('roomId') roomId: string) {
    return this.messageService.findAll({
      where: { roomId },
      order: {
        createdAt: 'ASC',
      },
      limit: -1,
    });
  }

  @Get(':id')
  @SetMetadata('METHOD', 'FIND_ONE')
  @UseInterceptors(MessageInterceptor)
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
