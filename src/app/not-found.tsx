import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-center text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
