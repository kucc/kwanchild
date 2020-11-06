import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import ProblemEntity from "./problem.entity";
import UserEntity from "./user.entity";

@Entity("UserProblem")
export default class UserProblemEntity {
  @PrimaryColumn()
  userId!: number;

  @PrimaryColumn()
  problemId!: number;

  @ManyToOne(() => UserEntity, (user) => user.userProblem)
  @JoinColumn({
    name: "userId",
    referencedColumnName: "id",
  })
  user!: UserEntity;

  @ManyToOne(() => ProblemEntity, (problem) => problem.userProblem)
  @JoinColumn({
    name: "problemId",
    referencedColumnName: "id",
  })
  problem!: ProblemEntity;
}
