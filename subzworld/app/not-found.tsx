import Link from "next/link";
import "./not-found.css";
import LinkButton from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>OOPS!</h1> 
      <h2>We cannot find the page you have requested for:</h2>
      {/* <Link className="" href="/">Click Here to go back to the Homepage</Link> */}
      <LinkButton href="/">Click Here to go back to the Homepage</LinkButton>
    </div>
  );
}
