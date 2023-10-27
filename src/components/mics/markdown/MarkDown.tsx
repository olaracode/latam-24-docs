"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkdownClasses from "./markdown.styles";

const MarkDown = ({ content }: { content: string }) => {
  console.log(`${MarkdownClasses}`);
  return (
    <div className={`${MarkdownClasses}`}>
      <ReactMarkdown
        components={{
          code({ node, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const { ref, ...otherProps } = props;
            return match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                {...otherProps}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
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
