import useShare from "@/lib/context/useShare";
import { SignUp } from "@clerk/nextjs";
import { ShareContextType } from "../auth/login";

const SignUpPage = () => {
  const { allContext } = useShare() as unknown as ShareContextType;
  const { routerPath } = allContext;
  return (
    <main className="App">
      <section className="grid h-screen place-content-center">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          redirectUrl={routerPath}
        />
      </section>
    </main>
  );
};
export default SignUpPage;
