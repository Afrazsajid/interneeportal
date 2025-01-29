import { ApplyForm } from "@/components/ApplyForm";
import { transformInternshipData } from "@/lib/transformInternshipData";
import { getInternships } from "@/sanity/lib/getInternShips/getInternShips";
import { FC } from "react";


interface PageProps {
  searchParams: {
    internship?: string;
  };
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const query = searchParams?.internship || ""; // Ensure query is always a string

  const internships = await getInternships()
  const internshiprefData = transformInternshipData(internships)


// const internshiprefData = [
//   { value: "next.js", label: "Next.js" },
//   { value: "sveltekit", label: "SvelteKit" },
//   { value: "nuxt.js", label: "Nuxt.js" },
//   { value: "remix", label: "Remix" },
//   { value: "astro", label: "Astro" },
// ];

  return (
    <div>
      {/* Display the query or a message */}
      {query ? <p>Search Query: {query}</p> : <p>No search query provided.</p>}

    
    <ApplyForm internshiprefData={internshiprefData}/>

      
    </div>
  );
};

export default Page;
