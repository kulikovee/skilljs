export interface Article {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    likes: number;
};
