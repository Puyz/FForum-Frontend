import { PostUser } from "./postUser";

export interface AnswerMessage {
    id: number;
    user: PostUser;
    content: string;
    createdDate: Date;
}