import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { In } from 'typeorm';
import { RoomMemberService } from '../room-member/room-member.service';
import { CreateRoomInput } from './dto/create-room.dto';
import { UpdateRoomInput } from './dto/update-room.dto';
import { Room, RoomPaginated } from './entities/room.entity';
import { RoomService } from './room.service';

@Resolver(() => Room)
@UseGuards(AuthenticateGuard)
export class RoomResolver {
	constructor(
		private readonly roomService: RoomService,
		private readonly roomMemberService: RoomMemberService,
	) {}

	@ResolveField(() => String, { nullable: true })
	name(@Root() root: Room, @Context() ctx: Ctx) {
		if (root.name) return root.name;

		const userId = ctx.req.user.sub;
		const member = root.members?.find((member) => member.userId !== userId);
		return member?.user?.name;
	}

	@ResolveField(() => String, { nullable: true })
	avatar(@Root() root: Room, @Context() ctx: Ctx) {
		if (root.avatar) return root.avatar;

		const userId = ctx.req.user.sub;
		const member = root.members?.find((member) => member.userId !== userId);
		return member?.user?.name;
	}

	@Query(() => RoomPaginated)
	async getAllRoom(@Context() ctx: Ctx) {
		const userId = ctx.req.user.sub;

		const roomMembers = await this.roomMemberService.findByUserId(userId);
		const roomIds = roomMembers.map((mem) => mem.roomId);

		return this.roomService.findAll({
			where: {
				id: In(roomIds),
			},
			order: {
				timestamp: 'DESC',
			},
		});
	}

	@Query(() => Room)
	getOneRoom(@Args('id') id: string) {
		return this.roomService.findOne(id);
	}

	@Mutation(() => Room)
	async createRoom(@Args('data') data: CreateRoomInput, @Context() ctx: Ctx) {
		const { userId } = data;

		if (userId === ctx.req.user.sub) {
			throw new BadRequestException('Invalid userId');
		}

		const room = await this.roomService.create({});
		const roomId = room.id;
		Promise.all([
			this.roomMemberService.create({ roomId, userId }),
			this.roomMemberService.create({ roomId, userId: ctx.req.user.sub }),
		]);
		return room;
	}

	@Mutation(() => Room)
	updateRoom(@Args('id') id: string, @Args('data') _data: UpdateRoomInput) {
		return this.roomService.update(id, {});
	}

	@Mutation(() => Room)
	removeRoom(@Args('id') id: string) {
		return this.roomService.remove(id);
	}
}
