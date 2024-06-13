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
        src="https://utfs.io/f/bd04c0a7-53fe-4f53-9c25-e44a5e0afb75-ejb435.png"
        width={width}
        preview={preview}
      />
      The Cloud Blog
    </a>
  );
};
