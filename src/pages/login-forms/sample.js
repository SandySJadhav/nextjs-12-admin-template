import React, { useState } from "react";
import Layout from "@components/Layout";
import TextField from "@components/TextField";
import Checkbox from "@components/Checkbox";
import Button from "@components/Button";

const Sample = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <Layout>
      <div className="bg-pp overflow-auto w-full min-h-screen grid grid-cols-1 place-content-center">
        <div className="border-black rounded-lg bg-white border md:w-[526px] sm:w-full justify-self-center">
          <div className="flex p-10 flex-col space-6 my-10">
            <div className="flex justify-center form-title text-black font-[Inter] text-2xl">
              <h1>SIGN IN TO YOUR ACCOUNT</h1>
            </div>
            <div className="block mt-10 md:mx-8">
              <TextField
                type="text"
                placeholder="Username"
                value={userName}
                onChange={setUserName}
              />
            </div>
            <div className="block mt-6 md:mx-8">
              <TextField
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
            <div className="block mt-6 md:mx-8 select-none">
              <Checkbox
                value={keepSignedIn}
                title="KEEP ME SIGNED IN"
                onChange={setKeepSignedIn}
              />
            </div>

            <div className="block mt-6 md:mx-8">
              <Button variant="primary" className="w-full bg-pp">
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sample;
