const MockArticleBody = `
JavaScript linting is the process of analyzing source code to flag potential errors, bugs, and style issues. Linting tools are used to perform this analysis automatically and can help developers find and fix errors early in the development process.
Linters can check for a variety of issues, including syntax errors, unused variables or parameters, and inconsistent formatting. They can also enforce coding standards and style guidelines, such as indentation, variable naming, and file organization.
JavaScript linting tools are typically integrated into the developer's workflow, either through an IDE (Integrated Development Environment) or a command-line tool. Popular JavaScript linting tools include JSLint, JSHint, ESLint, and Standard.
By using a linter, developers can catch potential issues early in the development process, which can save time and effort in the long run. Linting can also help ensure consistency across codebases and make code easier to read and maintain.
In addition to the benefits mentioned above, JavaScript linting can also help enforce best practices and coding conventions across teams or projects. By setting up a linter with a specific set of rules, developers can ensure that everyone is following the same coding style and avoiding common mistakes or anti-patterns.
For example, a linter can enforce the use of strict mode, which helps prevent common JavaScript mistakes and improves code quality. It can also flag variables or functions that are defined but not used, which can help reduce code clutter and improve performance.
Another benefit of JavaScript linting is that it can improve code maintainability. By flagging potential issues before they become problems, developers can fix issues early in the development process and ensure that code remains easy to work with over time. Linting can also help make code more readable and easier to understand, which can save time when reviewing or debugging code.
Finally, JavaScript linting can help maintain code quality over time. By enforcing coding standards and style guidelines, linting can help ensure that code remains consistent and easy to work with as it evolves. This can be particularly valuable for large codebases or projects with multiple contributors.
In summary, JavaScript linting is a powerful tool for improving code quality, reducing errors, and promoting best practices in software development. By catching potential issues early in the development process and enforcing coding conventions, linting can help make code more portable, secure, readable, and maintainable.
`;

const MockArticle = {
    "id": 1,
    "title": "What is Linting #1",
    "body": MockArticleBody,
    "createdAt": "2023-08-17T17:04:03.674Z",
    "updatedAt": "2023-08-17T17:04:03.674Z",
    "views": 7,
    "likes": 3
};

export const MockArticleFactory = (id: number) => ({
    ...MockArticle,
    id,
    title: `What is Linting #${id}`,
    views: (id + 3) * 13,
    likes: (id + 1) * 3,
});
