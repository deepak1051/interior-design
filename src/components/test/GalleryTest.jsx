import React from 'react';

const GalleryTest = () => {
  return (
    <section class="py-10 lg:py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -m-3">
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="https://media.istockphoto.com/id/1455622789/photo/black-luxury-modern-retro-style-living-room-with-blank-image-frames-for-your-design.jpg?b=1&s=170667a&w=0&k=20&c=tNaQIArkCvC3oY_6-80BmUGyA5QinElxTda_r4s1u_M="
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover object-top"
              src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTest;
