import { Image, ImageProps } from "antd";

export const AppLogoText = (props: ImageProps & { flip?: boolean }) => {
  const { width = 32, preview = false, flip = false } = props;
  return (
    <a
      href="/"
      className="text-white flex items-center gap-2 font-semibold"
      style={{ color: flip ? "white" : "black" }}
    >
      <Image
        {...props}
        src={
          flip
            ? "https://tcw-icon.s3.us-west-2.amazonaws.com/9.png"
            : "https://tcw-icon.s3.us-west-2.amazonaws.com/7.png"
        }
        width={width}
        preview={preview}
      />
      The Cloud Blog
    </a>
  );
};
