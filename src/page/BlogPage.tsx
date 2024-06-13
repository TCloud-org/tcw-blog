import { Col, Flex, Image, Row } from "antd";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkToc from "remark-toc";
import { createSpan } from "../config/LayoutConfig";
import { Author } from "../dataDisplayComponents/Author";
import { BlogShare } from "../dataEntryComponents/BlogShare";
import { snakeToTitleCase } from "../utils/StringUtils";

export const BlogPage = () => {
  const { blogId } = useParams();

  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(
          "https://utfs.io/f/1436a98c-884a-4225-8ab3-a342c6e5126d-dt75qg.md"
        );
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchMarkdown();
  }, [blogId]);

  return (
    <Flex
      vertical
      className="p-4 lg:p-24 max-w-screen-2xl ml-auto mr-auto"
      gap={16}
    >
      <div className="mb-8 mt-16 lg:mt-0">
        <Author
          imageUrl="https://utfs.io/f/a3cdc50b-46a6-4bb3-9369-12a6ebbb6c40-gru4o1.png"
          name="Tung Dinh"
          date="05/29/24"
          readingTime={7}
        />
      </div>
      <Image
        src="https://utfs.io/f/58274aeb-68a2-41c1-abfc-c8243e001da8-mxaa7u.png"
        preview={false}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <Row gutter={[32, 32]}>
        <Col {...createSpan(18)}>
          <div style={{ fontSize: 18, lineHeight: 2 }}>
            <ReactMarkdown
              remarkPlugins={[
                remarkToc,
                remarkGfm,
                [remarkHeadingId, { defaults: true, uniqueDefaults: true }],
              ]}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </Col>

        <Col {...createSpan(6)}>
          <BlogShare title={snakeToTitleCase(blogId || "")} />
        </Col>
      </Row>
    </Flex>
  );
};
