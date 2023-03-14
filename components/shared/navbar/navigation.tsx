import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <header className="bg-[#0a0a0a] font-HSRegular">
        <nav className="flex space-x-2 mx-16 py-6">
          <span className="mr-5">
            <h1 className="bold font-HSBold text-3xl">
              <Link href=".">
                নুর-
                <span className="text-[var(--red-primary-brand-color)]">
                  আইটি
                </span>{" "}
              </Link>
            </h1>
          </span>
          <ul className="flex justify-start space-x-3">
            <li className="hover:bg-[var(--red-primary-brand-color)] p-2 rounded-md transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
              <Link href="/courses">সবগুলো কোর্স দেখ</Link>
            </li>
            <li className="hover:bg-[var(--red-primary-brand-color)] p-2 rounded-md transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
              <Link href="/blogs">ব্লগ</Link>
            </li>
            <li className="hover:bg-[var(--red-primary-brand-color)] p-2 rounded-md transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
              <Link href="/dashboard">ড্যাশবোর্ড</Link>
            </li>
            <li className="bg-[var(--red-primary-brand-color)] p-2 rounded-md cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
              সেমিনারস
            </li>
          </ul>

          <ul className="flex   space-x-2  my-2">
            <li>ডার্ক</li>
            <li>লাইট</li>
            <li>লগইন/সাইন-আপ</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
