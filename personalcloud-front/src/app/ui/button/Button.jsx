import "./Button.css";
import Link from "next/link";

export const Button = ({ text, type, urlSign }) => {
  return (
    <Link className={`button ${type}`} href={`${urlSign}`}>
      {text}
      {/* <Link href="/dashboard">{text}</Link> */}
    </Link>
  );
};
