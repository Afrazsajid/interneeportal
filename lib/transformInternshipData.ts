import { Internship, SEARCH_INTERNSHIPS_QUERYResult } from "@/sanity.types";

  
  type Option = {
    value: string;
    label: string;
  };
  
  export const transformInternshipData = (data: SEARCH_INTERNSHIPS_QUERYResult): Option[] => {
    return data.map(({ _id, title }) => ({
      value: _id,
      label: title || "Unknown Title",
    }));
  };
  ;
  