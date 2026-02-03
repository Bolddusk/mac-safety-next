/**
 * Pages Router 404 page. Ensures the static 404 export is generated from this
 * simple component instead of the default path that can trigger the
 * "Html should not be imported outside of pages/_document" prerender error.
 * Do not import from next/document here.
 */
export default function Custom404() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
