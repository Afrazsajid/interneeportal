import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

/**
 * Fetches internships based on a search string.
 * @param searchParam - The search string to filter internships by.
 * @returns A promise resolving to an array of internships.
 */
export const  getInternBySearch = async (searchParam = "") => {
  const SEARCH_INTERNSHIPS_QUERY = defineQuery(`
    *[_type == "internship" && (title match "${searchParam}" || companyname match "${searchParam}") ] {
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

  // If searchParam is empty, return all internships without any filtering
  const finalQuery = searchParam.trim() === "" 
    ? defineQuery(`
        *[_type == "internship"] {
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
      `)
    : SEARCH_INTERNSHIPS_QUERY;

  try {
    // Execute the query with the search parameter
    const internships = await sanityFetch({
      query: finalQuery,
    });

    // Return the fetched internships or an empty array
    return internships?.data || [];
  } catch (error) {
    console.error("Error in fetching internships:", error);
    return [];
  }
};
