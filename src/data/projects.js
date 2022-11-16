import blog from "../assets/projects/nextBlog.gif";
import calendar from "../assets/projects/myNote.gif";
import ecommerce from "../assets/projects/eCommerce.gif";

export const projectData = [
  {
    title: "Jewelry Quest",
    description: "eCommerce platform prototype for a small boutique",
    technologies: "React, NodeJS, Express, MongoDB, Stripe",
    image: ecommerce,
    demo: "https://jquest.vercel.app",
    github: "https://github.com/heliumcxxi/ecfrontend",
  },
  {
    title: "MyNote",
    description: "Jot down everything at ease",
    technologies: "React",
    image: calendar,
    demo: "https://heliumcxxi.github.io/myNote",
    github: "https://github.com/heliumcxxi/myNote",
  },
  {
    title: "Simple Blog",
    description: "Quick and SSO friendly blog prototype",
    technologies: "NextJS, GraphQL, Tailwind",
    image: blog,
    demo: "https://next-graphql-tailwind-blog.vercel.app",
    github: "https://github.com/heliumcxxi/next-graphql-tailwind-blog",
  },
];
