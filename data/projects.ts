export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  stack: string;
  image: string;
  github?: string;
  website?: string;
};

export const projects: Project[] = [
  {
    slug: "bil-chatbot",
    title: "BIL Chatbot",
    tag: "AI / INSURANCE",
    summary: "Insurance answers from company pages and documents. Fewer PDF scavenger hunts.",
    stack: "Python · FastAPI · LangChain · RAG",
    image: "/images/project-bil-chatbot.png",
    github: "https://github.com/Sparrow535/bil_chatbot_langchain",
    website: "https://www.bil.bt/",
  },
  {
    slug: "mindfulrealestate-bt",
    title: "MindfulRealestate.bt",
    tag: "REAL ESTATE / WEB",
    summary: "Buy, rent, stay and build in Bhutan. House hunting has enough surprises.",
    stack: "Live platform · private code",
    image: "/images/project-mindfulrealestate.png",
    website: "https://mindfulrealestate.bt",
  },
  {
    slug: "mystique-realm",
    title: "Mystique Realm",
    tag: "TRAVEL / WEB",
    summary: "Tours and itineraries in one place. No treasure map required.",
    stack: "React · TypeScript · CSS",
    image: "/images/project-mystique-realm.png",
    github: "https://github.com/Sparrow535/mystique_realm",
    website: "https://mystique-realm.vercel.app",
  },
  {
    slug: "sea-travel",
    title: "SEA Travel",
    tag: "TRAVEL / WEB",
    summary: "Retreats and trip details in one place. Planning can be easier than packing.",
    stack: "React · TypeScript · Vite",
    image: "/images/project-sea-travel.png",
    github: "https://github.com/Sparrow535/SEA_travel",
    website: "https://spiritualescapeadventure.com",
  },
];
