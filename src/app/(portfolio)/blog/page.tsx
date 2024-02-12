// import React from "react"

// const page = () => {
//   return (
//     <>
//       <section className="mx-auto flex w-full flex-col pt-8">
//         <h1 className="py-4 text-center text-5xl font-bold">My Blog</h1>
//         <hr className="mx-auto w-[20%]" />
//         <div className="grow p-10 text-center text-xl">
//           Stay tuned for the first post :D
//         </div>
//       </section>
//     </>
//   )
// }

// export default page

import { load } from "outstatic/server"
import type { OstDocument } from "outstatic"
import Link from "next/link"
import Image from "next/image"

export default async function Index() {
  const { allPosts } = await getData()

  return (
    <div className="mx-auto max-w-6xl px-5">
      <h1 className="py-10 text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
        My Blog
      </h1>
      {allPosts.length > 0 && <ContentGrid items={allPosts} priority />}
    </div>
  )
}

async function getData() {
  const db = await load()

  const allPosts = await db
    .find({ collection: "blog" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  return {
    allPosts,
  }
}

type Item = {
  tags?: { value: string; label: string }[]
} & OstDocument

type ContentGridProps = {
  items: Item[]
  priority?: boolean
}

const ContentGrid = ({ items, priority = false }: ContentGridProps) => {
  return (
    <section>
      <div className="mb-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {items.map((item, id) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="scale-100 cursor-pointer overflow-hidden rounded-md border border-nier-700 transition duration-100 hover:scale-[1.02] hover:shadow active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 md:w-full"
          >
            <div className="sm:mx-0">
              <Image
                src={item.coverImage ?? ""}
                alt={`Cover Image for ${item.title}`}
                className="h-auto w-full object-cover object-center"
                width={0}
                height={0}
                sizes="(min-width: 768px) 347px, 192px"
                priority={priority && id <= 2}
              />
            </div>
            <div className="p-4">
              {Array.isArray(item?.tags) ?
                item.tags.map(({ label }) => (
                  <span
                    key={label}
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {label}
                  </span>
                ))
              : null}
              <h3 className="mb-2 text-xl font-bold leading-snug hover:underline">
                {item.title}
              </h3>
              <div className="text-md mb-4 text-slate-700"></div>
              <p className="mb-4 text-lg leading-relaxed">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}