import { Rank } from "./rank";

export interface PostUser {
    userId: number;
    rank: Rank;
    username: string;
    fullname: string;
    image: string;
}