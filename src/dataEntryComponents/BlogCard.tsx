import { Flex, Image, Typography, theme } from "antd";
import { formatDate } from "../utils/DateUtils";

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
    imageUrl = "https://utfs.io/f/1b2b53bb-bf0c-42d9-b3c0-4ee772ad33a4-9p834s.png",
    title = "Title",
    description = "Description",
    date = formatDate(new Date()),
    readingTime = 0,
  } = props;

  const handleClick = () => {
    window.open(`/${encodeURIComponent(id)}`, "_blank");
  };

  return (
    <Flex
      vertical
      className="cursor-pointer rounded-lg h-full"
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

      <Flex
        vertical
        className="p-4 rounded-bl-lg rounded-br-lg h-full flex flex-col justify-between"
        gap={16}
      >
        <Flex vertical gap={16}>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
            {title}
          </Typography.Title>

          <Typography.Paragraph className="text-lg text-slate-500">
            {description}
          </Typography.Paragraph>
        </Flex>

        <Flex gap={8} align="flex-end">
          <Typography.Text className="text-slate-700">{date}</Typography.Text>
          <Typography.Text className="text-slate-700">•</Typography.Text>
          <Typography.Text className="text-slate-700">{`${readingTime} min`}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
