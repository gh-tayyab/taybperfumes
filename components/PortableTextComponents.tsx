import { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-display mt-12 mb-6">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-3xl font-display mt-10 mb-5">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-2xl font-display mt-8 mb-4">
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="mb-6 leading-8 text-white/90">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-6 space-y-2">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">
        {children}
      </strong>
    ),

    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
  },
};