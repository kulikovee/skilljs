import React from 'react';
import Header from "../Header/Header";
import ArticleList from "../ArticleList/ArticleList";

const mockedArticles = [
    {id: 1, title: 'Eduard helps me in Frontend', text: 'I like it because............', date: '2023-02-04', },
    {id: 2, title: 'Vitali part of this cool project', text: 'I like it because............', date: '2022-06-29', },
]

const Layout = () => {
    return (
        <>
            <Header title="SkillJS" />
            <ArticleList articles={mockedArticles} />
        </>
    );
};

export default Layout;
