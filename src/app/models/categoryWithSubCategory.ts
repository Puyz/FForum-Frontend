import { SubCategory } from "./subCategory";

export interface CategoryWithSubCategory {
    id: number;
    name: string;
    subCategory: SubCategory[];
}