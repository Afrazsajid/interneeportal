import { PublishIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const internshipType = defineType({
    name: 'internship',
    title: 'InternShips',
    type: 'document',
    icon:PublishIcon,
    fields: [
      
        defineField({
            name: 'title',
            title: 'Internship Name',
            type: 'string',
      
          
            validation:(Rule) => Rule.required(),
                
                
            }),
            defineField({
                name: 'internshipslug',
                title: 'Slug',
                type:"slug",
                options:{
                    source:"title",
                    maxLength:96
                },
               
                validation:(Rule) => Rule.required(),
                
                
            }),
          

          
              

      

              defineField({
                name: 'companyname',
                title: 'Company Name',
                type: 'string',
               
                
              }),

              defineField({
                name: 'description',
                title: 'Description',
                type: 'string',
               
                
              }),

              defineField({
                name: "status",
                title: "Status",
                type: "string",
                options: {
                  list: [
                    { title: "Paid", value: "paid" },
                    { title: "Unpaid", value: "unpaid" }
                  ],
                  layout: "radio",
                },
                validation: (Rule) => Rule.required().error("Status is required"),
              }),

              defineField( {
                name: "isActive",
                title: "Active",
                type: "boolean",
                validation: (Rule) => Rule.required().error("IsActive is required"),
              }),

         

            
        
        
    ],
    preview: {
        select: {
            title: "title",
          
        },
        prepare(select) {
            return {
                title: select.title, // Fix: Correct the typo here
               
            }
        }
    }
})