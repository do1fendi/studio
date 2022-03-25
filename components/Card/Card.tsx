import Image from "next/image";
import Link from "next/link";
type CardType = {
  title: string;
  picUrl: string;
  category: string;
  link: string;
};

const Card = (props: CardType) => {
  return (
    <div className="flex flex-col justify-center">
      <Image src={props.picUrl} width={350} height={200} />
    </div>
  );
};

export default Card;
