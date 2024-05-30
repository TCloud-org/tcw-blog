import { useState } from "react";
import LinkRounded from "@mui/icons-material/LinkRounded";
import { Tooltip } from "antd";

export const LinkCopy = (props: { children?: string }) => {
  const { children = "" } = props;

  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <Tooltip title={copy ? "Copied" : "Copy"}>
      <LinkRounded onClick={handleCopy} className="cursor-pointer" />
    </Tooltip>
  );
};
