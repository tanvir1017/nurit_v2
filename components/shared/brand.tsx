import Link from "next/link";

export default function LightModeBrand() {
  return (
    <h1 className="font-HSBold text-3xl mr-4">
      <Link href=".">
        নুর-
        <span className="text-[var(--red-primary-brand-color)]">আইটি</span>{" "}
      </Link>
    </h1>
  );
}
