import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href={""} className="flex items-center text-black">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-black dark:border-white mr-4">
        <Image
          src={profileImg}
          alt="Tion Japan"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl text-black dark:text-white">
        Tion Japan
      </span>
    </Link>
  );
};
export default Logo;
