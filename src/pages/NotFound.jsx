import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found on Shivaranjani Speech & Hearing Clinic."
        path="/404"
        keywords={[]}
        noindex
      />
      <section className="container section">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <Link className="btn" to="/">
          Return Home
        </Link>
      </section>
    </>
  );
}

export default NotFound;
