import React from "react";
import FirstHeader from "./FirstHeader";
import SecHeader from "./SecHeader";
import ThirdHeader from "./ThirdHeader";

export default function Header() {
  return (
    <div>
      <React.StrictMode>
        <FirstHeader />
        <SecHeader />
        {/* <ThirdHeader /> */}
      </React.StrictMode>
    </div>
  );
}
