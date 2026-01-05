import { db } from "../firebase/config";
import { useCopyright } from "../firebase/fbQueries";

function Copyright() {
  const copyright = useCopyright(db);
  const year = new Date().getFullYear();
  return (
    <div className="footer-copyright">
      <span className="copyright">
        <span>&copy; {year} WOW SOLUTION 360, LLC - </span>
        {copyright.watermark ? (
          <>
            <span>DEVELOPED BY </span>
            <a
              href="https://danielvargas.dev?utm_source=wowsolution360&utm_medium=link&utm_campaign=Desarrollado%20por%20Daniel%20Vargas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Vargas
            </a>
            .
          </>
        ): (
          <span>ALL RIGHTS RESERVED.</span>
        )}
      </span>
    </div>
  );
}
export default Copyright;
