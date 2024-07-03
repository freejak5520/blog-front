import Footer from "./_components/Footer";
import Gnb from "@/components/gnb";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-dvh flex-col items-center">
      <Gnb />
      <main className="mx-auto flex w-full max-w-screen-md flex-1 flex-col justify-between px-4 py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
