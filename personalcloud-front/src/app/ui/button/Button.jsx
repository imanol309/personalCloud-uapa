import "./Button.css";
import Link from "next/link";

export const Button = ({ text, type }) => {
  return (
    <Link className={`button ${type}`} href="/dashboard">
      {text}
      {/* <Link href="/dashboard">{text}</Link> */}
    </Link>
  );
};
