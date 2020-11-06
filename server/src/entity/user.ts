import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
