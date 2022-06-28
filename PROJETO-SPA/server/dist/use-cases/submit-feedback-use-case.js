"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
const Date_1 = require("../Date");
class SubmitFeedbackUseCase {
    constructor(feedbacksRepository, mailAdapter) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { type, email, comment, screenshot } = request;
        if (!type) {
            throw new Error('Type is required.');
        }
        if (!email) {
            throw new Error('email is required.');
        }
        if (!comment) {
            throw new Error('comment is required.');
        }
        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.');
        }
        await this.feedbacksRepository.create({
            type,
            email,
            comment,
            screenshot,
        });
        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p> Tipo do feedback: ${type}</p>`, `<p> Email do Usuario: ${email}</p>`,
                `<p>comentario: ${comment}</p>`, `<p>Data de envio: ${Date_1.date}  </p>`,
                screenshot ? `<img src= "${screenshot}"/>` : '',
                `</div>`
            ].join('\n')
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
