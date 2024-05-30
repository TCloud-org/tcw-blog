import { Flex, Image, Typography } from "antd";

export const BlogCard = (props: {
  imageUrl?: string;
  title?: string;
  description?: string;
}) => {
  const { imageUrl, title, description } = props;

  return (
    <Flex vertical>
      <Image preview={false} src={imageUrl} />

      <Typography.Text strong>{title}</Typography.Text>

      <Typography.Paragraph>{description}</Typography.Paragraph>
    </Flex>
  );
};
