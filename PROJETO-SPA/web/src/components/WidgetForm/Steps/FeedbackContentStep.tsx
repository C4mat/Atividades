import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, FeedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";



interface FeedbackContentStepProps {

    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;


}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const feedbackTypeInfo = FeedbackTypes[feedbackType];
    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        setIsSendingFeedback(true);


        /* console.log({
 
             screenshot,
             comment,
 
         })
         */
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot,

        });

        setIsSendingFeedback(false);
        onFeedbackSent();

    }


    return (


        <>

            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-blue-800 hover:text-blue-600"
                    onClick={onFeedbackRestartRequested}

                >
                    <ArrowLeft weight="bold" className="w-4 h-4 " />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">

                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}

                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[340px] w-full min-h-[112px] text-sm placeholder-slate-800 text-zinc-900 border-zinc-600 bg-transparent rounded-md focus:border-zinc-700 focus:ring-zinc-700 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-900 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo......"
                    onChange={event => setComment(event.target.value)}


                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot} />

                    <button

                        type="submit"
                        disabled={comment.length === 0 || isSendingFeedback}
                        className="p-2 bg-blue-700 
                        rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-blue-800 transition-colors  disabled:opacity-50 disabled:hover:bg-blue-700 "


                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar'}

                    </button>
                </footer>
            </form>
        </>
    )
}