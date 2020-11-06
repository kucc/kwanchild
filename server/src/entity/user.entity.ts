import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserProblemEntity from "./user-problem.entity";

@Entity("User")
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  startTime?: Date;

  @OneToMany(() => UserProblemEntity, (userProblem) => userProblem.user)
  userProblem?: UserProblemEntity[];
}
