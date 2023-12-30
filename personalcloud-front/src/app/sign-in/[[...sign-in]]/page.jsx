import { SignIn } from "@clerk/nextjs";
import NavBarSign from "../../components/navBarSign/NavBarSign";
import "./sign-in.css";

export default function Page() {
  return (
    <div className="container__sign">
      <NavBarSign />
      <SignIn afterSignInUrl="/dashboard" />{" "}
    </div>
  );
}
