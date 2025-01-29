import PostGrid from "@/components/PostGrid";
import { getInternBySearch } from "@/sanity/lib/getInternBySearch/getInternBySearch";
import { FC } from "react";

interface PageProps {
  searchParams: {
    query?: string;
  };
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const query = searchParams?.query || ""; // Ensure query is always a string
  const PostList = await getInternBySearch(query);

  
  return (
    <>
 
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {query ? `Search Results for "${query}"` : "All Results"}
        </h2>
      </div>

      {/* Post Grid Display */}
     
        {PostList && PostList.length > 0 ? (
          <PostGrid products={PostList} />
        ) : (
          <p className="text-center text-lg text-gray-500 col-span-full">
            No results found. Please try again with a different query.
          </p>
        )}
    

    </>
    
  );
};

export default Page;
