import Link from "next/link";

export default function LightModeBrand() {
  return (
    <Link href=".">
      <h1 className="font-HSBold text-3xl mr-4">
        নুর-
        <span className="text-[var(--red-primary-brand-color)]">আইটি</span>{" "}
      </h1>
    </Link>
  );
}
