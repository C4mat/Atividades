import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b3cd3b3a5c9a9d",
        pass: "b1f126b4d51661"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe MAT <mat@gmail.com>',
            to: 'matheus c <mat.c@gmail.com>',
            subject,

            html: body,

        });





    }






}