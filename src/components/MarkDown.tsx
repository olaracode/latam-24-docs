"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const h1Styles = "[&>h1]:text-2xl [&>h1]:font-bold [&>h1]:border-b-2";
const h2Styles =
  "[&>h2]:text-xl [&>h2]:font-bold [&>h2]:border-b-2 [&>h2]:my-3";

const ulStyles = "[&>ul]:list-disc [&>ul]:ml-5 [&>ul]:my-3";
const olStyles = "[&>ol]:list-decimal [&>ol]:ml-5 [&>ol] my-3:";
const liStyles = "[&>li]:my-2";
const blockquoteStyles =
  "[&>blockquote]:border-l-4 [&>blockquote]:pl-2 [&>blockquote]:my-3";
const MarkDown = ({ content }: { content: string }) => {
  return (
    <div
      className={`${h1Styles} ${h2Styles} ${ulStyles} ${olStyles} ${liStyles} ${blockquoteStyles}`}
    >
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          a({ node, children, href, ...props }) {
            return (
              <Link href={href} {...props}>
                {children}
              </Link>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
