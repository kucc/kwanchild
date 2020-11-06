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
    console.log(updatedUser);
    await userRepository.save(updatedUser);
  },
};

export default userService;
