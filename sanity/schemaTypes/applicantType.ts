import { UserIcon} from "@sanity/icons";

import { defineField, defineType } from "sanity";

export const applicantType = defineType({
  name: "applicant",
  title: "Applicants",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Applicant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

   

    defineField({
      name: "email",
      title: "Email Adresss",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "internshiprefrence",
      title: "InternShip Reference",
      type: "reference",
      to: [{ type: "internship" }], // Specifies the document type to reference
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "phonenumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^\+?[1-9]\d{1,14}$/, {
          name: "phoneNumber", // Error message for the validation
          invert: false,
        }).error("Please enter a valid phone number"),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(select) {
      return {
        title: select.title, // Fix: Correct the typo here
      };
    },
  },
});
