import type { NextPageContext } from "next";

/**
 * Custom Pages Router error page. Required so the build does not use the default
 * _error path that can trigger "Html should not be imported outside of pages/_document"
 * during prerender of /404. This file must not import from next/document.
 */
function Error({
  statusCode,
}: {
  statusCode: number;
}) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{statusCode ?? "Error"}</h1>
      <p>
        {statusCode === 404
          ? "Page not found."
          : `An error ${statusCode} occurred.`}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
