import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { Message, MessagePaginated } from './entities/message.entity';
import { MessageService } from './message.service';

@Resolver(() => Message)
@UseGuards(AuthenticateGuard)
export class MessageResolver {
	constructor(private readonly messageService: MessageService) {}

	@ResolveField(() => Boolean)
	isOwnMessage(@Root() root: Message, @Context() ctx: Ctx) {
		return root.userId === ctx.req.user.sub;
	}

	@Query(() => MessagePaginated)
	getAllMessageByRoom(@Args('roomId') roomId: string) {
		return this.messageService.findAll({
			where: { roomId },
			order: {
				createdAt: 'ASC',
			},
			limit: -1,
		});
	}
}
