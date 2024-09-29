import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t w-full h-20 bg-gray-300 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-center gap-4 h-full text-gray-700 dark:text-gray-300 text-sm px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <p className="text-center">
            The source code is available on{" "}
            <Link
              className="px-1 text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              href="https://github.com/hwahyeon/terms-english-korean"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
