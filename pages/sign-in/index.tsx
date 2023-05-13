import useShare from "@/lib/context/useShare";
import { SignIn } from "@clerk/nextjs";
import { ShareContextType } from "../auth/login";

const SignInPage = () => {
  const { allContext } = useShare() as unknown as ShareContextType;
  const { routerPath } = allContext;
  return (
    <main className="App">
      <section className="grid h-screen place-content-center">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl={routerPath}
        />
      </section>
    </main>
  );
};

export default SignInPage;
