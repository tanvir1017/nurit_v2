import Metadata from "@/util/SEO/metadata";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function notFinishedYet() {
  return (
    <>
      <Metadata
        title="NurIT | Not finished yet"
        name="Not finished yet"
        content="Not finished yet"
        // key="skill course, course, ms office, office 364"
      />
      <main className="App">
        <section className="container grid h-screen place-content-center">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 place-content-center h-screen place-items-center">
            <Image
              width={600}
              height={100}
              src="/images/inprogress.webp"
              alt="web site in-progress  "
            />
            <div>
              <h1 className="text-6xl font-HSSemiBold leading-[4.5rem]">
                এই পেইজটির পরিপূর্ণ কাজ এখনো শেষ হয় নাই!
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
        </section>
      </main>
    </>
  );
}

export default notFinishedYet;
