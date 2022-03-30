import Image from "next/image";
// import Link from "next/link";
type CardType = {
  title: string;
  picUrl: string;
  category: string;
  link: string;
};

const Card = (props: CardType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={props.picUrl} width={650} height={400} />
      <h3 className="text-xl font-bold text-gray-600">{props.title}</h3>
      <h3 className="text-xl font-bold text-gray-400">{props.category}</h3>
    </div>
  );
};

export default Card;
