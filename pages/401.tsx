import { motion as m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
const Unauthorized = () => {
  const { theme } = useTheme();

  return (
    <main className="px-8">
      <div className="grid h-screen place-content-center grid-cols-2 place-items-center">
        <div className="IMAGES">
          {theme === "dark" ? (
            <Image
              src="/images/dark401.png"
              alt="unauthorized"
              width={500}
              height={100}
            />
          ) : (
            <Image
              src="/images/401.png"
              alt="unauthorized"
              width={500}
              height={100}
            />
          )}
        </div>
        <div className="TEXT p-5">
          <h1 className="text-7xl">
            You are{" "}
            <strong className="text-[var(--red-primary-brand-color)]">
              Unauthorized
            </strong>{" "}
            <br />
            to access this page
          </h1>
          <div className="mt-5">
            <Link href="/">
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="px-8 py-2 bg-[var(--red-primary-brand-color)]  rounded-full"
              >
                Go Home
              </m.button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Unauthorized;
