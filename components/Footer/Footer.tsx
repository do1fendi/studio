import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-58 bg-gray-200">
      <div className="flex justify-center p-3">
        <Image
          src={`${process.env.BASEURL}/images/logo/logoGrey.webp`}
          width="150"
          height="60"
        />
      </div>
      <div className="flex justify-center">
        <h3 className="text-gray-600 text-sm p-5">© Copyright 2021 玩玩創意 All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
