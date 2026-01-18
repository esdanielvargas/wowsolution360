export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <span className="copyright">
        <span>&copy; {year} WOW SOLUTION 360, LLC - </span>
        <span>
          {"DEVELOPED BY "}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            href="https://danielvargas.dev?utm_source=wowsolution360&utm_medium=footer_link&utm_campaign=dev_credit"
            target="_blank"
            rel="noopener"
            title="Visit Daniel Vargas - Full Stack Web Developer Portfolio"
          >
            Daniel Vargas
          </a>
          .
        </span>
      </span>
    </div>
  );
}
