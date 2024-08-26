import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'sockets' })
export class Socket extends BaseEntity {
	@Column()
	clientId!: string;

	@Column()
	userId!: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'userId' })
	user?: User;
}
