import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Problem")
export default class ProblemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  solvedAt!: Date;
}
