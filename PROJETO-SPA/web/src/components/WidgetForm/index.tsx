import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/other.svg'
import praiseImageUrl from '../../assets/praise.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const FeedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto'
        },
    },

    IDEIA: {
        title: 'Ideia',

        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada '
        },
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de opções'

        },
    },

    PRAISE: {
        title: 'Elogio',
        image: {
            source: praiseImageUrl,
            alt: 'Imagem de um balão de uma estrela'

        },
    },
};



export type FeedbackType = keyof typeof FeedbackTypes;

export function WidgetForm() {
    const [FeedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {

        setFeedbackSent(false);
        setFeedbackType(null);

    }

    return (

        <div className="bg-blue-200 dark:bg-gray-500 p-4 relative rounded-2xl md-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />

            ) : (
                <>
                    {!FeedbackType ? (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />)
                        : (

                            <FeedbackContentStep

                                feedbackType={FeedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}

                            />

                        )}
                </>
            )}


            <footer className="text-xs text-blue-800">
                Feito por Matheus Claudino Ribeiro

            </footer>
        </div>
    );
}