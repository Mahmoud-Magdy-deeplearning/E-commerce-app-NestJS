import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
//   import { UserEntity } from '../../auth/models/user.entity';
  
  @Entity('itemsEntity')
  export class ItemsEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    name: string;

    @Column({ nullable: false, type: "float", default: 0.0})
    price: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    // @ManyToOne(() => UserEntity, (userEntity) => userEntity.feedPosts)
    // author: UserEntity;
  }