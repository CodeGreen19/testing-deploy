import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-pink-500">Navbar</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
