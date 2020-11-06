import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  startTime?: Date;

  @Column({ nullable: true })
  endTime?: Date;
}
