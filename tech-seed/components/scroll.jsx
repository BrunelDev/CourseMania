import React from 'react';

export default function ScrollableSections() {
  return (
    <div className="w-[600px] h-[600px] overflow-x-auto scroll-snap-x flex snap-mandatory snap-x">
      <section id="section1" className="w-full h-full flex-shrink-0 bg-gray-100 snap-center flex items-center justify-center">
        <h2 className="text-3xl font-bold">Section 1</h2>
      </section>
      <section id="section2" className="w-full h-full flex-shrink-0 bg-gray-200 snap-center flex items-center justify-center">
        <h2 className="text-3xl font-bold">Section 2</h2>
      </section>
      <section id="section3" className="w-full h-full flex-shrink-0 bg-gray-300 snap-center flex items-center justify-center">
        <h2 className="text-3xl font-bold">Section 3</h2>
      </section>
    </div>
  );
}
