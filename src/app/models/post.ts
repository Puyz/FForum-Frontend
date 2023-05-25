import { Category } from './category';
import { PostUser } from './postUser';
import { SubCategory } from './subCategory';
export interface Post {
    postId: number;
    postUser: PostUser;
    category: Category;
    subCategory: SubCategory;
    title: string;
    description: string;
    createdDate: Date;
    isActive: boolean;
}