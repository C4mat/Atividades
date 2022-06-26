export interface FeedbackCreateData {

    type: string;
    email: string;
    comment: string;
    screenshot?: string;


}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;


}