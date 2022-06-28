"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaFeedbacksRepository {
    async create({ type, email, comment, screenshot, }) {
        await prisma_1.prisma.feedback.create({
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
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
