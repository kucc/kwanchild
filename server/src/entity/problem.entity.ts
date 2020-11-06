import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Problem")
export default class ProblemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  answer!: string;
}
