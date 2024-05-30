import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Flex } from "antd";

export const BlogPage = () => {
  const { blogId } = useParams();

  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/blogs/${blogId}.md`);
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchMarkdown();
  }, [blogId]);

  return (
    <Flex vertical className="p-24 max-w-screen-2xl ml-auto mr-auto">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </Flex>
  );
};
