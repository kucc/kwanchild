import { getRepository } from "typeorm";
import UserEntity from "../entity/user.entity";

const userService = {
  createUser: async (username: string) => {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.create({
      name: username,
    });
    console.log(user);
    const createdUser = await userRepository.save(user);

    return createdUser;
  },

  isUniqueUser: async (username: string) => {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.findOne({ where: { name: username } });

    return user ? true : false;
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

    const updatedUser = userRepository.merge(user, { totalTime: playTime });
    await userRepository.save(updatedUser);
  },

  getTop10: async () => {
    const userRepository = getRepository(UserEntity);
    const top10 = userRepository
      .createQueryBuilder("User")
      .orderBy("User.totalTime", "ASC")
      .limit(10)
      .getMany();

    return top10;
  },
};

export default userService;
