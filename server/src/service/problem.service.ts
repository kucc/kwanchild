import { getRepository } from "typeorm";
import ProblemEntity from "../entity/problem.entity";

const problemService = {
  createProblem: async (answer: string) => {
    const problemRepository = getRepository(ProblemEntity);
    const newProb = problemRepository.create({ answer });

    const prob = await problemRepository.save(newProb);

    return prob;
  },

  isCorrect: async (problemId: number, answer: string) => {
    const problemRepository = getRepository(ProblemEntity);
    const problem = await problemRepository.findOne({ id: problemId });

    if (!problem) throw new Error("존재하지 않는 문제에용");

    return answer === problem.answer ? true : false;
  },
};

export default problemService;
