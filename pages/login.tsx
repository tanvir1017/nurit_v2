import LightModeBrand from "@/components/shared/brand";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div>
        <LightModeBrand />
      </div>
      <Link href="/signing">Create an account</Link>
    </>
  );
};

export default Login;
