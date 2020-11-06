import { getRepository } from "typeorm";
import UserEntity from "../entity/user.entity";

const userService = {
  createUser: async (username: string, startTime: Date) => {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.create({ name: username, startTime });
    await userRepository.save(user);

    return user;
  },

  isUniqueUser: async (username: string) => {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.findOne({ where: { name: username } });

    return user ? true : false;
  },
};

export default userService;
