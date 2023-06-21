import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
  const items = [
    {
      id: 1,
      title: 'Provide some additional information with this FAQ Accordion.',
      body: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry&apos;s standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      title: 'Provide some additional information with this FAQ Accordion.',
      body: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry&apos;s standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.`,
    },
    {
      id: 3,
      title: 'Provide some additional information with this FAQ Accordion.',
      body: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry&apos;s standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.`,
    },
    {
      id: 4,
      title: 'Provide some additional information with this FAQ Accordion.',
      body: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry&apos;s standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.`,
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" id="faq">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <span
              className="inline-block max-w-max mb-6 px-3 py-1.5 text-sm text-white uppercase tracking-tight font-semibold bg-gray-600 rounded-full"
              style={{
                background:
                  "url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7135121.jpg&fm=jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              Try some freebie
            </span>
            <h2 className="font-heading text-6xl tracking-tighter">
              Provide some additional information with this FAQ Accordion.
            </h2>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
