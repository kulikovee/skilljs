import React from 'react';

type ArticleProp = {
    id: number,
    title: string,
    text: string,
    date: string
}

type ArticleListProps = {
    articles: ArticleProp[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
    <div>
        {articles.map(article => {
            return (
                //need to create ArticleItem instead of this
                <article key={ article.id }>
                    <h1>{ article.title }</h1>
                    <p>{ article.text }</p>
                    <strong>{ article.date }</strong>
                </article>
            )
        })}
    </div>
)

export default ArticleList;
