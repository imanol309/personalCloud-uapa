import "./Button.css";
import Link from "next/link";

export const Button = ({ text, type, urlSign }) => {
  return (
    <Link className={`button ${type}`} href={`${urlSign}`} type={type}>
      {text}
      {/* <Link href="/dashboard/my-cloud">{text}</Link> */}
    </Link>
  );
};
