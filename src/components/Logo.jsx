import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" rel="home" className="logo">
      <span hidden>WOW SOLUTION 360</span>
      <img
        src="/images/logotype.svg"
        alt="WOW SOLUTIONS 360"
        title="WOW SOLUTIONS 360"
        loading="eager"
        width={280}
        height={56}
      />
    </Link>
  );
}
