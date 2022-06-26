import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {

    async create({ type, email, comment, screenshot }: FeedbackCreateData) {

        await prisma.feedback.create({


            data: {
                email,
                type,
                comment,
                screenshot,
            }
        });

    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;