import { Applicant } from "@/sanity.types";

import { backendclient } from "@/sanity/lib/backendClient";

export default async function createApplicantInSanity(applicant: Applicant) {
  return await backendclient.create(applicant);
}
