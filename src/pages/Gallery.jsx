import React from 'react';
import './gallery.css';
const Gallery = () => {
  return (
    <div>
      <main>
        <h2 className="gallery-title">Projects Gallery</h2>
        <div className="grid-container container">
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="gallery1"
            />

            <img
              src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="gallery2"
            />

            <img
              src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="gallery2"
            />
          </div>

          <div className="column">
            <img
              src="https://media.istockphoto.com/id/1455622789/photo/black-luxury-modern-retro-style-living-room-with-blank-image-frames-for-your-design.jpg?b=1&s=170667a&w=0&k=20&c=tNaQIArkCvC3oY_6-80BmUGyA5QinElxTda_r4s1u_M="
              alt="gallery3"
            />

            <img
              src="https://media.istockphoto.com/id/1386951967/photo/modern-kitchen-interior-with-green-wall.jpg?b=1&s=170667a&w=0&k=20&c=6_d5XfDRbUJZdrzvv5fAPTTsBp3f3NgvHpdp-3T8aeE="
              alt="gallery4"
            />

            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="gallery5"
            />

            {/* <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" /> */}
          </div>

          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="gallery6"
            />

            <img
              src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery7"
            />

            <img
              src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery8"
            />
          </div>

          <div className="column">
            <img
              src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery9"
            />

            <img
              src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery10"
            />

            <img
              src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="gallery11"
            />

            <img
              src="https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              alt="gallery12"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
