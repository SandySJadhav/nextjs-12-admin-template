import Layout from "@components/Layout";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="h-screen grid grid-cols-1 mt-10">
        <div className="justify-self-center">
          <h1 className="font-bold text-4xl">Welcome to NextJS Admin Template Master</h1>
          <p className="mt-4">Don&apos;t forget to checkout samples</p>
        </div>
      </div>
    </Layout>
  );
};

export default index;
