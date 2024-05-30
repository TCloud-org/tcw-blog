import { Flex, Image, Typography, theme } from "antd";

export const BlogCard = (props: {
  id: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  date?: string;
  readingTime?: number;
}) => {
  const { token } = theme.useToken();

  const {
    id,
    imageUrl = "https://tcw-images.s3.us-west-2.amazonaws.com/default-blog.png",
    title,
    description,
    date,
    readingTime,
  } = props;

  const handleClick = () => {
    window.open(`/${encodeURIComponent(id)}`, "_blank");
  };

  return (
    <Flex
      vertical
      className="cursor-pointer rounded-lg"
      style={{ boxShadow: token.boxShadow }}
      onClick={handleClick}
    >
      <Image
        preview={false}
        src={imageUrl}
        height={250}
        style={{ objectFit: "cover" }}
        className="rounded-tl-lg rounded-tr-lg"
      />

      <Flex vertical className="p-4 rounded-bl-lg rounded-br-lg" gap={16}>
        <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
          {title}
        </Typography.Title>

        <Typography.Paragraph className="text-lg text-slate-500">
          {description}
        </Typography.Paragraph>

        <Flex gap={8}>
          <Typography.Text className="text-slate-700">{date}</Typography.Text>
          <Typography.Text className="text-slate-700">•</Typography.Text>
          <Typography.Text className="text-slate-700">{`${readingTime} min`}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
