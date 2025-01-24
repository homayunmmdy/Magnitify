import { Input } from "@/components";
import Image from "next/image";

const ImagePreview = ({
  imgurl,
  title,
  onChange,
}: {
  imgurl: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <Image
      src={!imgurl ? "/static/Image/logo.jpg" : imgurl}
      alt={title}
      title={title}
      height={390.938}
      width={695}
      className="mb-2 aspect-video w-full rounded-xl border border-indigo-500"
    />
    <Input
      id="imgurl"
      type="text"
      name="imgurl"
      label="Image Link"
      color="input-primary"
      style="w-full"
      value={imgurl}
      onChange={onChange}
    />
  </>
);

export default ImagePreview;
