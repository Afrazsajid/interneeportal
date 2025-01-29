import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

/**
 * Fetches internships based on a search string.
 * @param searchParam - The search string to filter internships by.
 * @returns A promise resolving to an array of internships.
 */
export const getInternships = async () => {
  const SEARCH_INTERNSHIPS_QUERY = defineQuery(`
    *[_type == "internship" ] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      title,
      internshipslug,
      companyname,
      description,
      status,
      isActive
    }
  `);

  try {
    // Execute the query with the search parameter
    const internships = await sanityFetch({
      query: SEARCH_INTERNSHIPS_QUERY,
    
    });

    // Return the fetched internships or an empty array
    return internships?.data || [];
  } catch (error) {
    console.error("Error in fetching internships:", error);
    return [];
  }
};
