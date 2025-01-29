import ImageSlider from "@/components/ImgeSlider";
import PostGrid from "@/components/PostGrid";
import { Internship } from "@/sanity.types";
import { getInternships } from "@/sanity/lib/getInternShips/getInternShips";
import Image from "next/image";

export default async function Home() {
  const postlist = await getInternships()
  const formattedPostList: Internship[] = postlist.map(post => ({
    ...post,
    title: post.title ?? undefined,
    internshipslug: post.internshipslug ?? undefined,
    companyname: post.companyname ?? undefined,
    description: post.description ?? undefined,
    status: post.status ?? undefined,
    isActive: post.isActive ?? undefined
  }));
  
  return (
    <main>
      {/* <ImageSlider/> */}


      <div className="flex flex-col items-center w-full text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-700">
          What Is Internee.pk ?
        </h1>
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 text-base sm:text-lg md:text-xl leading-relaxed">
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan! We recognize the immense potential of talented individuals
          in the country and aim to bridge the gap between them and the thriving
          IT industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
      </div>

      {/* <InternPostGrid/> */}
      <PostGrid products={formattedPostList} />



    </main>
  );
}
