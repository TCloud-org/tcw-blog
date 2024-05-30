import { Flex } from "antd";
import { LinkCopy } from "./LinkCopy";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

export const BlogShare = (props: { title?: string }) => {
  const { title = "" } = props;
  return (
    <Flex vertical className="mt-8">
      <h3 className="text-primary">Share this article</h3>

      <Flex gap={16}>
        <FacebookShareButton title={title} url={window.location.href}>
          <Facebook />
        </FacebookShareButton>
        <TwitterShareButton title={title} url={window.location.href}>
          <Twitter />
        </TwitterShareButton>
        <LinkedinShareButton
          title={title}
          summary="Check out this blog post"
          url={window.location.href}
        >
          <LinkedIn />
        </LinkedinShareButton>
        <LinkCopy>{window.location.href}</LinkCopy>
      </Flex>
    </Flex>
  );
};
