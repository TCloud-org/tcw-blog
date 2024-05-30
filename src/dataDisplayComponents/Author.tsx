import { Avatar, Flex, Typography } from "antd";
import { formatDate } from "../utils/DateUtils";

export const Author = (props: {
  imageUrl?: string;
  name?: string;
  date?: string;
  readingTime?: number;
}) => {
  const {
    imageUrl,
    name,
    date = formatDate(new Date()),
    readingTime = 0,
  } = props;

  return (
    <Flex align="center" gap={8}>
      <Avatar size="large" src={imageUrl} />

      <Typography.Text strong className="text-lg">
        {name}
      </Typography.Text>

      <Typography.Text className="ml-4 text-slate-500">{date}</Typography.Text>
      <Typography.Text className="text-slate-500">•</Typography.Text>
      <Typography.Text className="text-slate-500">{`${readingTime} min`}</Typography.Text>
    </Flex>
  );
};
