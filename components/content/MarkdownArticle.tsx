import React from 'react';

export interface MarkdownArticleProps {
  content: string;
}

export const MarkdownArticle: React.FC<MarkdownArticleProps> = ({ content }) => {
  // You can replace this with a real markdown renderer later
  return <div>{content}</div>;
};
