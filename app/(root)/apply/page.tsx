import { FC } from "react";

interface PageProps {
  searchParams: {
    internship?: string;
  };
}

const Page: FC<PageProps> = ({ searchParams }) => {
  const query = searchParams?.internship || ""; // Ensure query is always a string

  return (
    <div>
      {/* Display the query or a message */}
      {query ? <p>Search Query: {query}</p> : <p>No search query provided.</p>}
    </div>
  );
};

export default Page;
