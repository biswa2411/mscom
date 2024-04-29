"use client";

import { BillingAddrs } from "@components/pages/profile/BillingAddrs";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  return (
    <section className="bg-blue-300 h-full w-full flex justify-center ">
      <BillingAddrs />
    </section>
  );
};

export default Profile;
