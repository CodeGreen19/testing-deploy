import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default page;
