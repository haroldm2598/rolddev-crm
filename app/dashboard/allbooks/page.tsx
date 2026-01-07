import { Metadata } from "next";
import AllBooksClient from "./AllBooksClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const dummyUserName = "mikey";

  return {
    title: `All Books | ${dummyUserName}`,
    description: `Welcome to Analytics overview ${dummyUserName}.`,
    openGraph: {
      title: `All Books | ${dummyUserName}`,
      description: "Private Analytics",
      url: "https://localhost:3000/dashboard/analytics",
      siteName: "rolddev-crm",
      type: "website",
    },
  };
};

export default async function AllBooksPage() {
  return (
    <div className="lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-7xl flex flex-col">
      <AllBooksClient />
    </div>
  );
}
