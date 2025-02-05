import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type BreadcrumbSchema = {
  "@context": string;
  "@type": string;
  itemListElement: {
    "@type": string;
    position: number;
    name: string;
    item: string;
  }[];
};

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathnames: string[] = router.pathname.split("/").filter((x) => x);

  const breadcrumbSchema: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pathnames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: decodeURIComponent(name),
      item: `${window.location.origin}/${pathnames.slice(0, index + 1).join("/")}`
    }))
  };

  return (
    <nav aria-label="breadcrumb" className="p-4 bg-gray-100 rounded-md">
      <ol className="flex space-x-2 text-gray-600">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {index === pathnames.length - 1 ? (
                <span className="text-gray-900">{decodeURIComponent(value)}</span>
              ) : (
                <Link href={to} className="text-blue-500 hover:underline">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </nav>
  );
};

export default Breadcrumbs;
