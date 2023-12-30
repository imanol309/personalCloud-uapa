import { SignUp } from "@clerk/nextjs";
import NavBarSign from "../../components/navBarSign/NavBarSign";
import "./sign-up.css"

export default function Page() {
  return (
    <div className="container__sign">
      <NavBarSign />
      <SignUp afterSignInUrl="/dashboard" className="sign"/>
    </div>
  );
}
