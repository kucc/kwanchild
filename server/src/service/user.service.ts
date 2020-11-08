import { getRepository } from "typeorm";
import UserEntity from "../entity/user.entity";

const userService = {
  createUser: async (username: string) => {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.create({
      name: username,
    });
    const createdUser = await userRepository.save(user);

    return createdUser;
  },

  isUniqueUser: async (username: string) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { name: username } });

    return user ? false : true;
  },

  gameStart: async (name: string) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { name } });

    if (!user) throw new Error("너 누구야");

    const updatedUser = userRepository.merge(user, { startTime: new Date() });
    await userRepository.save(updatedUser);
  },

  gameEnd: async (name: string) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { name } });

    if (!user) throw new Error("너 누구야");

    if (!user.startTime) throw new Error("응?");

    const now = new Date();
    const playTime = (now.getTime() - user.startTime.getTime()) / 1000;

    if (playTime < 60) throw new Error("조작질 금지!");

    const updatedUser = userRepository.merge(user, { totalTime: playTime });
    await userRepository.save(updatedUser);
  },

  getRanking: async (num: number) => {
    const userRepository = getRepository(UserEntity);
    const top10 = userRepository
      .createQueryBuilder("User")
      .where("User.totalTime IS NOT NULL")
      .orderBy("User.totalTime", "ASC")
      .limit(num)
      .getMany();

    return top10;
  },

  getUserTotalTime: async (name: string) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { name } });

    if (!user || !user.totalTime) throw new Error("유효하지 않은 요청");

    return user.totalTime;
  },
};

export default userService;
