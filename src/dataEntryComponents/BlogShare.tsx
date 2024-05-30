import { Flex } from "antd";
import { LinkCopy } from "./LinkCopy";

export const BlogShare = () => {
  return (
    <Flex vertical className="mt-8">
      <h3 className="text-primary">Share this article</h3>

      <Flex>
        <LinkCopy>{window.location.href}</LinkCopy>
      </Flex>
    </Flex>
  );
};
