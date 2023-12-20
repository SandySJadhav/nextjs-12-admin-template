import Image from "next/image";
import React from "react";

const UserProfile = () => {
  return (
    <div className="grid justify-items-center">
      <Image
        className="rounded-full border-8 border-base dark:border-black"
        height={100}
        width={100}
        priority={false}
        src="/1605610886733.jpg"
        alt="profile"
      />
      <div>Sandip Jadhav</div>
    </div>
  );
};

export default UserProfile;
