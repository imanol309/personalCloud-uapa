import { SignIn } from "@clerk/nextjs";
import NavBarSign from "../../components/navBarSign/NavBarSign";

export default function Page() {
  return (
    <div className="container__sign">
      <NavBarSign />
      <SignIn afterSignInUrl="dashboard" />{" "}
    </div>
  );
}
