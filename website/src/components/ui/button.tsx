import Link from "next/link";

export const LinkButton = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`rounded-full transition-colors flex items-center justify-center text-sm sm:text-base h-12 sm:h-12 px-5 sm:px-5 min-w-[160px] ${className}`}
  >
    {children}
  </Link>
);
