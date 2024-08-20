import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { RoomMember } from './entities/room-member.entity';

@Injectable()
export class RoomMemberService extends BaseService<RoomMember> {
  constructor(
    @InjectRepository(RoomMember)
    private readonly roomMemberRepo: Repository<RoomMember>,
  ) {
    super(roomMemberRepo);
  }
}
