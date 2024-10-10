import React from "react";

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col items-center px-6 py-20 text-black dark:text-white">
      <div className="flex max-w-[700px] flex-col gap-8">
        <h1 className="text-5xl font-bold">About</h1>
        <p>
          This demo store is designed to feature top-tier performance functionality and exceptional
          UI/UX, offering a smooth and seamless interaction for users. While it is not intended for
          actual product purchases, it serves as a practical example to demonstrate modern web
          development techniques, particularly in Next.js. The project leverages the DummyJSON API
          to simulate real-world e-commerce functionality, giving developers an opportunity to
          explore and experiment with a fully functional mock environment.
        </p>
        <p>
          Inspired by the Vercel demo store, this project incorporates cutting-edge development
          practices, focusing on fast, responsive design and performance optimization. From the
          moment users land on the site, they are greeted with a clean, intuitive interface that
          mimics the experience of a fully-fledged online store. All the typical e-commerce
          functionality is present—browsing products, applying filters, viewing product details, and
          even adding items to a cart—but everything is powered by mock data from the DummyJSON API.
        </p>
        <p>
          The emphasis is on showcasing the best practices for building modern web applications with
          Next.js. Server-side rendering, static site generation, API routing, and client-side data
          fetching are all utilized to ensure optimal performance and responsiveness. Developers can
          explore these features in a real-world scenario, learning how to handle dynamic content,
          manage state, and optimize the user experience while keeping performance in check.
        </p>
        <p>
          Although users cannot make actual purchases, every part of the UI/UX has been crafted to
          mimic a real shopping experience. From smooth page transitions to responsive design that
          adapts to various screen sizes, the demo store highlights how to create scalable and
          performant applications with an excellent user experience. This project is a learning tool
          for developers who want to dive deep into Next.js, experiment with best practices, and
          apply them to a practical, hands-on environment.
        </p>
        <p>
          Whether used for learning or as inspiration for future projects, this demo store stands as
          a testament to how powerful and versatile modern web development can be when leveraging
          the right tools and techniques. It’s not just about the code—it’s about creating an
          experience that feels fast, fluid, and responsive, all while adhering to the highest
          standards of performance and usability.
        </p>
      </div>
    </div>
  );
}
