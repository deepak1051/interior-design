import React from 'react';

const HomeTest = () => {
  return (
    <div>
      <section class="relative pt-20 md:pt-28 md:pb-28 overflow-hidden">
        <div class="relative">
          <img
            class="hidden lg:block absolute top-1/2 right-0 max-w-lg xl:max-w-none xl:h-200 transform -translate-y-1/2"
            src="https://cdn.dribbble.com/users/110792/screenshots/17149522/media/6840dca434302066a0e40cc743c6127f.png?compress=1&resize=640x480&vertical=center"
            alt=""
          />
          <div class="relative container px-4 mx-auto">
            <div class="max-w-xl mx-auto lg:mx-0">
              <div class="max-w-lg mb-2">
                <span class="inline-block py-1 px-3 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  &#x1F44B; MEET SATURN UI LIBRARY
                </span>
                <h1 class="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-5">
                  <span>Manage your </span>
                  <span class="font-serif italic"> products </span>
                  <span> with saturn </span>
                </h1>
                <p class="text-xl text-gray-500 font-semibold">
                  Nisi eu pellentesque felis volutpat aliquet pulvinar sed.
                  Vitae fames vestibulum urna vel odio mauris urna orci est.
                </p>
                <img
                  class="block ml-auto -mt-4 -mr-8"
                  src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/08/img_box_30-1.png"
                  alt=""
                />
              </div>
              <div class="sm:flex items-center mb-8">
                <input
                  class="w-full mb-3 sm:mb-0 sm:mr-4 py-4 px-6 text-gray-500 placeholder-gray-400 border border-gray-200 rounded-full focus:border-purple-500 focus:outline-purple"
                  type="email"
                  placeholder="Enter email address"
                />
                <button
                  class="relative group sm:flex-shrink-0 inline-block w-full sm:w-auto py-4 px-6 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden"
                  type="submit"
                >
                  <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span class="relative">Start 14-days trial</span>
                </button>
              </div>
              <div class="flex flex-wrap items-center -mx-4">
                <div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div class="flex items-center">
                    <img
                      src="saturn-assets/images/applications/avatar-photo1.png"
                      alt=""
                    />
                    <img
                      class="-ml-3"
                      src="saturn-assets/images/applications/avatar-photo2.png"
                      alt=""
                    />
                    <img
                      class="-ml-3"
                      src="saturn-assets/images/applications/avatar-photo3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div>
                    <span class="block text-2xl font-bold text-gray-900">
                      500+
                    </span>
                    <span class="text-sm text-gray-400">Happy Customers</span>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-4">
                  <div>
                    <span class="block text-2xl font-bold text-gray-900">
                      5.0/5
                    </span>
                    <div class="flex items-center">
                      <div class="flex items-center mr-2">
                        <img
                          class="mr-1"
                          src="saturn-assets/images/applications/star.svg"
                          alt=""
                        />
                        <img
                          class="mr-1"
                          src="saturn-assets/images/applications/star.svg"
                          alt=""
                        />
                        <img
                          class="mr-1"
                          src="saturn-assets/images/applications/star.svg"
                          alt=""
                        />
                        <img
                          class="mr-1"
                          src="saturn-assets/images/applications/star.svg"
                          alt=""
                        />
                        <img
                          src="saturn-assets/images/applications/star.svg"
                          alt=""
                        />
                      </div>
                      <span class="text-sm text-gray-400">Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            class="block w-full pl-8 mt-20 ml-auto lg:hidden"
            src="saturn-assets/images/applications/app-full-image.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default HomeTest;
