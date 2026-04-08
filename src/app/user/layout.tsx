import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Layout1</h1>
      {children}
    </div>
  );
};
export default UserLayout;
