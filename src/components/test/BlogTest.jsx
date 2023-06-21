import React from 'react';

const BlogTest = () => {
  return (
    <section class="py-24 lg:pt-28 lg:pb-32 bg-white overflow-hidden">
      <div class="container px-4 mx-auto">
        <h2 class="font-heading mb-12 text-6xl tracking-tighter">
          New Articles
        </h2>
        <div class="flex flex-wrap -m-8">
          <div class="w-full md:w-1/2 p-8">
            <div class="group cursor-pointer">
              <div class="mb-6 overflow-hidden rounded-lg">
                <img
                  class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                  src="https://brandingrise.com/wp-content/uploads/2021/03/seo-1-1170x700.png"
                  alt=""
                />
              </div>
              <p class="mb-6 text-gray-500 font-medium tracking-tight">
                <span class="mr-4 text-indigo-500 font-semibold">Insights</span>
                <span>June 22, 2021</span>
              </p>
              <h3
                class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline"
                style={{ letterSpacing: '-0.5px' }}
              >
                WFH One year on. Here&rsquo;s what we&rsquo;ve learned.
              </h3>
              <p class="text-xl">
                Use and re-use tons of responsive sections too a main create the
                perfect layout. Sections are firmly of organised into the
                perfect start.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <div class="group cursor-pointer">
              <div class="mb-6 overflow-hidden rounded-lg">
                <img
                  class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                  src="https://brandingrise.com/wp-content/uploads/2021/03/Untitled-design-10-1170x700.png"
                  alt=""
                />
              </div>
              <p class="mb-6 text-gray-500 font-medium tracking-tight">
                <span class="mr-4 text-indigo-500 font-semibold">Insights</span>
                <span>June 22, 2021</span>
              </p>
              <h3
                class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline"
                style={{ letterSpacing: '-0.5px' }}
              >
                WFH One year on. Here&rsquo;s what we&rsquo;ve learned.
              </h3>
              <p class="text-xl">
                Use and re-use tons of responsive sections too a main create the
                perfect layout. Sections are firmly of organised into the
                perfect start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTest;
