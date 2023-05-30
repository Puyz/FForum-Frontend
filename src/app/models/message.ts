import { AnswerMessage } from "./answerMessage";
import { PostUser } from "./postUser";

export interface Message {
    id: number;
    postId: number;
    user: PostUser;
    answerMessage: AnswerMessage;
    content: string;
    createdDate: Date;
}