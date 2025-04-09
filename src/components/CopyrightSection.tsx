export const CopyrightSection = () => {
    return (
      <section className="w-full py-6 px-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Fizryan. All rights reserved. 😉
        </p>
        <p className="mt-1">
          Made <span className="text-red-400"></span> using React, Tailwind CSS, and Framer Motion.
        </p>
      </section>
    );
  };
  