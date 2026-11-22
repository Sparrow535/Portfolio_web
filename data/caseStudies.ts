export type Item = { title: string; text: string };
export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  headline: string;
  intro: string;
  links: { label: string; href: string }[];
  tags: string[];
  image: string;
  imageCaption: string;
  overview: string;
  facts: { label: string; value: string }[];
  challenge: string;
  direction: string;
  audiences: Item[];
  steps: Item[];
  flow: string;
  implementation: Item[];
  decisions: Item[];
  tests: Item[];
  reflection: string;
  constraints: string;
  next: string;
  sources: { label: string; href: string; text: string }[];
};

// Text shared by all four case studies
export const shared = {
  journeyNote: "An interface flow derived from the project’s public structure—not a research-validated journey map.",
  validationLabel: "PROPOSED NEXT TESTS / NOT COMPLETED RESEARCH",
  validationNote:
    "No interview findings, usability scores, or measured impact are claimed in this case study. Exact responsibilities and timeline have not been supplied.",
  sourcesNote:
    "Narrative adapted to Rohan Rai’s portfolio. Project facts are based on the existing portfolio, public source, and current website; interpretation and future validation are identified above.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bil-chatbot",
    category: "AI / INSURANCE",
    title: "BIL Chatbot",
    headline: "Insurance information, without the PDF scavenger hunt.",
    intro:
      "A conversational assistant for Bhutan Insurance Limited that connects questions with company information, relevant documents, and voice input.",
    links: [
      { label: "View live ↗", href: "https://www.bil.bt/" },
      { label: "Repository ↗", href: "https://github.com/Sparrow535/bil_chatbot_langchain" },
    ],
    tags: ["Python", "FastAPI", "LangChain", "FAISS / RAG"],
    image: "/images/project-bil-chatbot.png",
    imageCaption:
      "Live BIL website with the Norbu AI Assistant open. This capture shows its greeting, text composer, and microphone control; it is not an answer-quality test.",
    overview:
      "BIL Chatbot brings a conversational layer to Bhutan Insurance Limited’s public information. A FastAPI service coordinates retrieval, contextual chat, document tools, and speech transcription behind an embedded web interface.",
    facts: [
      { label: "Project type", value: "AI knowledge assistant" },
      { label: "Context", value: "Bhutan Insurance Limited" },
      { label: "Availability", value: "Public repository + live embed" },
    ],
    challenge:
      "Insurance information is distributed across product pages, claims guidance, and downloadable documents. A visitor may know what they need to ask without knowing which page or file contains the answer.",
    direction: "Create a direct question-to-information path while keeping source material and document access within reach.",
    audiences: [
      { title: "Prospective customers", text: "Explore products and find relevant insurance information." },
      { title: "Existing customers", text: "Locate claims guidance, company information, and documents." },
    ],
    steps: [
      { title: "Ask", text: "Type a question or record audio." },
      { title: "Retrieve", text: "Search indexed company material and relevant tools." },
      { title: "Respond", text: "Return contextual information and source references." },
      { title: "Continue", text: "Ask a follow-up or open a relevant document." },
    ],
    flow: "BIL pages + documents → text chunks with source metadata → OpenAI embeddings → FAISS retrieval → LangChain tools + response → embedded chat UI",
    implementation: [
      { title: "Retrieval pipeline", text: "The indexing script processes public content into searchable chunks. Source metadata travels with retrieved context." },
      { title: "API and orchestration", text: "FastAPI and Pydantic define request/response handling. LangChain coordinates model calls, intent handling, and tools." },
      { title: "Web integration", text: "The company homepage loads the Norbu embed. The public frontend includes chat, recording controls, and response rendering." },
    ],
    decisions: [
      { title: "Context across turns", text: "Session history supports follow-up questions rather than treating every message as a new search." },
      { title: "More than a text box", text: "The interface includes microphone controls; the API exposes a speech-to-text route for recorded audio." },
      { title: "Documents as an action", text: "Document requests can return relevant downloads instead of only describing where to find them." },
    ],
    tests: [
      { title: "Answer grounding", text: "Compare answers with approved product and claims material. Include questions the source cannot answer." },
      { title: "Conversation quality", text: "Test ambiguous follow-ups, topic changes, document requests, and source links." },
      { title: "Voice and resilience", text: "Check microphone denial, transcription errors, slow responses, and unavailable model services." },
    ],
    reflection:
      "The interesting part is not putting an LLM behind a chat box. It is connecting retrieval, conversation, and useful actions in the context where customers already look for information.",
    constraints:
      "Retrieval and source fields do not prove an answer is correct. Content freshness, scraping reliability, model availability, and process-local session history remain operational considerations.",
    next: "A practical next step is an approved question set covering products, claims, downloads, and missing information, with answer quality and source accuracy reviewed separately.",
    sources: [
      { label: "Public source + setup", href: "https://github.com/Sparrow535/bil_chatbot_langchain", text: "github.com/Sparrow535/bil_chatbot_langchain" },
      { label: "Company website + live assistant", href: "https://www.bil.bt/", text: "www.bil.bt/" },
      { label: "Indexing pipeline", href: "https://github.com/Sparrow535/bil_chatbot_langchain/blob/main/scripts/build_index.py", text: "github.com/Sparrow535/bil_chatbot_langchain/blob/main/scripts/build_index.py" },
    ],
  },
  {
    slug: "mindfulrealestate-bt",
    category: "REAL ESTATE / WEB",
    title: "MindfulRealestate.bt",
    headline: "One place to buy, rent, stay, and build in Bhutan.",
    intro:
      "A Bhutan-focused property platform that organizes different property needs around clear discovery, comparison, and enquiry paths.",
    links: [{ label: "View live ↗", href: "https://mindfulrealestate.bt" }],
    tags: ["React", "Property discovery", "Maps", "Private codebase"],
    image: "/images/project-mindfulrealestate.png",
    imageCaption:
      "Live homepage showing Buy, Rent, and Stay search entry points. Property data was not consistently available during review, so this capture is not evidence of completed listing or enquiry flows.",
    overview:
      "MindfulRealestate.bt brings property sales, rentals, short-term stays, and building-service discovery into a single web platform for Bhutan. Its public interface connects intent-led search with property details, comparison, saved properties, and account-based enquiries.",
    facts: [
      { label: "Project type", value: "Property marketplace" },
      { label: "Market", value: "Bhutan" },
      { label: "Availability", value: "Live platform / private code" },
    ],
    challenge:
      "Buying a home, finding a rental, planning a short stay, and sourcing building services are different decisions. Putting them together only works if visitors can recognize their own path and carry useful context into the next step.",
    direction: "Organize discovery around the visitor’s intent, then make it easier to evaluate options before making an enquiry.",
    audiences: [
      { title: "Property seekers", text: "Buyers, renters, and short-stay visitors exploring options in Bhutan." },
      { title: "Property professionals", text: "Businesses and service providers presenting listings or building services." },
    ],
    steps: [
      { title: "Choose intent", text: "Start with Buy, Rent, Stay, or Build." },
      { title: "Refine", text: "Narrow options using available filters." },
      { title: "Evaluate", text: "Review details, maps, saved items, or comparisons." },
      { title: "Enquire", text: "Sign in and send a property enquiry." },
    ],
    flow: "Intent selection → listing filters + sorting → property details + maps → compare / save → account sign-in → enquiry",
    implementation: [
      { title: "Discovery interfaces", text: "The deployed frontend contains filtering, sorting, property detail, gallery, and comparison modules." },
      { title: "Geographic context", text: "MapLibre is present in public assets. Location and property information support a Bhutan-focused browsing experience." },
      { title: "Account and API boundary", text: "The frontend uses API requests and account-based features. The private backend architecture is not documented here." },
    ],
    decisions: [
      { title: "Intent before inventory", text: "Buy, Rent, Stay, and Build provide distinct entry points instead of one undifferentiated property feed." },
      { title: "Support comparison", text: "The deployed frontend includes comparison and saved-property modules for decisions that span multiple visits." },
      { title: "Contextual enquiries", text: "Account-based enquiry interfaces connect a message with the property a visitor has been evaluating." },
    ],
    tests: [
      { title: "Journey clarity", text: "Can visitors distinguish buying, renting, short stays, and building services without backtracking?" },
      { title: "Decision support", text: "Check filter comprehension, Bhutan-specific land details, map use, and comparison of unlike properties." },
      { title: "Recovery and enquiry", text: "Test unavailable listing data, sign-in interruptions, retained enquiry context, and message delivery." },
    ],
    reflection:
      "A property platform needs more than a catalogue. Its useful work is helping someone move from a broad intention to a specific, informed question about a property or service.",
    constraints:
      "The source is private. Backend architecture, authorization, listing quality, and mail delivery are not independently verified. Public interface modules alone do not establish an end-to-end outcome.",
    next: "Prioritize loading and failure states alongside the happy path, then validate whether a visitor can compare options and complete an enquiry on mobile.",
    sources: [
      { label: "Live property platform", href: "https://mindfulrealestate.bt/", text: "mindfulrealestate.bt/" },
      { label: "Property discovery", href: "https://mindfulrealestate.bt/properties", text: "mindfulrealestate.bt/properties" },
      { label: "About the platform", href: "https://mindfulrealestate.bt/about", text: "mindfulrealestate.bt/about" },
    ],
  },
  {
    slug: "mystique-realm",
    category: "TRAVEL / WEB",
    title: "Mystique Realm",
    headline: "Explore Bhutan by the place—or the experience—you have in mind.",
    intro:
      "A travel website that combines destination-led browsing, tour categories, and itinerary content to support the early stages of planning a Bhutan journey.",
    links: [
      { label: "View live ↗", href: "https://mystique-realm.vercel.app" },
      { label: "Repository ↗", href: "https://github.com/Sparrow535/mystique_realm" },
    ],
    tags: ["React", "TypeScript", "React Router", "CSS"],
    image: "/images/project-mystique-realm.png",
    imageCaption:
      "Live package-page hero for Mystique Realm. The public interface also includes category and region controls; some category–region combinations currently return no tours.",
    overview:
      "Mystique Realm connects Bhutan destination discovery with categorized tours and itinerary pages. A shared TypeScript dataset supports browsing by travel interest and region, while routed pages organize trip facts, maps, galleries, and contact information.",
    facts: [
      { label: "Project type", value: "Travel discovery website" },
      { label: "Focus", value: "Bhutan tours + itineraries" },
      { label: "Availability", value: "Public repository + live site" },
    ],
    challenge:
      "Some travelers begin with a destination. Others begin with a festival, a hike, or a type of experience. A rigid browsing path can make either group work harder to understand what is available.",
    direction: "Support both starting points and connect exploration with a more detailed picture of the journey.",
    audiences: [
      { title: "Destination-led travelers", text: "Start with a region such as Paro, Thimphu, or Punakha." },
      { title: "Experience-led travelers", text: "Explore categories such as festivals, private tours, trekking, or outdoor adventure." },
    ],
    steps: [
      { title: "Explore", text: "Start from a destination or a travel category." },
      { title: "Combine", text: "Use region and category controls together." },
      { title: "Understand", text: "Open itinerary facts, day plans, maps, and galleries." },
      { title: "Contact", text: "Share travel preferences through the contact page." },
    ],
    flow: "Tour dataset + category metadata → region / category state → matching tour cards → /itinerary/:slug → trip preferences",
    implementation: [
      { title: "Routed travel pages", text: "React Router connects package discovery, itinerary detail, and contact pages." },
      { title: "Reusable content model", text: "TypeScript tour data and image helpers supply itinerary facts, regional maps, and galleries." },
      { title: "Visual presentation", text: "React components and CSS provide a photography-led interface, shared navigation, and category controls." },
    ],
    decisions: [
      { title: "Two ways into the same content", text: "A map and category controls let travelers approach tours geographically or by interest." },
      { title: "Shared itinerary data", text: "A common dataset supports consistent cards and slug-based detail pages rather than separate hard-coded journeys." },
      { title: "Planning context", text: "The contact form asks for travel month, party size, interests, and notes to frame the conversation." },
    ],
    tests: [
      { title: "Discoverability", text: "Can first-time visitors find and understand both map-based and category-based browsing?" },
      { title: "Empty combinations", text: "Check category–region pairs with no tours and whether the interface suggests a useful next action." },
      { title: "Contact completion", text: "Validate keyboard navigation and form behavior before describing enquiries as successfully delivered." },
    ],
    reflection:
      "Destination and experience are complementary ways of thinking about a trip. A shared content model can make both paths feel connected rather than like separate catalogues.",
    constraints:
      "The inspected contact form does not establish a delivery endpoint. Some itinerary facts derive from category templates. This is not documented as a booking or payment system.",
    next: "Improve empty-filter guidance, then test whether travelers can explain a chosen itinerary and reach a working contact handoff without losing their trip context.",
    sources: [
      { label: "Public source", href: "https://github.com/Sparrow535/mystique_realm", text: "github.com/Sparrow535/mystique_realm" },
      { label: "Live website", href: "https://mystique-realm.vercel.app/", text: "mystique-realm.vercel.app/" },
      { label: "Package exploration", href: "https://mystique-realm.vercel.app/packages", text: "mystique-realm.vercel.app/packages" },
    ],
  },
  {
    slug: "sea-travel",
    category: "TRAVEL / WEB",
    title: "SEA Travel",
    headline: "From a first glimpse of Bhutan to a clearer trip plan.",
    intro:
      "A travel website for Spiritual Escape Adventure that connects cultural, adventure, and festival collections with detailed journeys and direct inquiry paths.",
    links: [
      { label: "View live ↗", href: "https://spiritualescapeadventure.com" },
      { label: "Repository ↗", href: "https://github.com/Sparrow535/SEA_travel" },
    ],
    tags: ["React", "TypeScript", "Vite", "React Router"],
    image: "/images/project-sea-travel.png",
    imageCaption:
      "Live tour-detail hero for Jambay Lhakhang Drup. The deployed page continues into trip context, a brochure link, a planned itinerary, and a gallery.",
    overview:
      "SEA Travel presents Spiritual Escape Adventure’s Bhutan journeys through package collections, duration-labelled tour cards, detailed itineraries, and contact paths. The deployed site expands the public repository’s simpler page structure with richer trip content and inquiry feedback states.",
    facts: [
      { label: "Project type", value: "Travel discovery + inquiry" },
      { label: "Focus", value: "Bhutan journeys" },
      { label: "Availability", value: "Public repository + live site" },
    ],
    challenge:
      "Destination photography can create interest, but it does not tell a traveler how a journey unfolds. Visitors also need readable trip plans, practical context, and a clear way to ask questions.",
    direction: "Connect inspiration with itinerary understanding, then provide a straightforward inquiry handoff.",
    audiences: [
      { title: "Journey explorers", text: "Browse cultural, trekking/adventure, and festival experiences in Bhutan." },
      { title: "Ready-to-plan travelers", text: "Compare trip duration and day plans before contacting the operator." },
    ],
    steps: [
      { title: "Discover", text: "Browse a package collection or travel category." },
      { title: "Choose", text: "Review a tour card and its duration." },
      { title: "Plan", text: "Explore day plans, galleries, and brochure links." },
      { title: "Inquire", text: "Use the contact form to discuss arrangements." },
    ],
    flow: "Package collection → /tours/:tourId → day-plan exploration + brochure → validated contact form → mail endpoint",
    implementation: [
      { title: "Route-driven catalogue", text: "React, TypeScript, and React Router organize package collections and individual tour pages." },
      { title: "Richer deployed experience", text: "The current deployment includes expandable day plans, image galleries, and brochure links beyond the simpler repository snapshot." },
      { title: "Contact request states", text: "The frontend validates fields and posts JSON to /send-mail.php. The mail endpoint’s implementation and delivery were not tested." },
    ],
    decisions: [
      { title: "Show the shape of the trip", text: "Duration-labelled cards and dedicated tour pages make it easier to move beyond a destination image." },
      { title: "Progressive detail", text: "Expandable day plans keep a long itinerary navigable while allowing closer inspection." },
      { title: "Feedback at the handoff", text: "The deployed contact frontend includes validation, a pending request, and success/error messaging." },
    ],
    tests: [
      { title: "Mobile itinerary use", text: "Check day-plan discoverability, keyboard operation, and keeping one’s place in a long journey." },
      { title: "Content resilience", text: "Verify brochure links, image behavior on slow connections, and clear duration information." },
      { title: "Inquiry recovery", text: "Test required fields, server failures, retry behavior, accessible feedback, and actual email receipt." },
    ],
    reflection:
      "Travel storytelling works best when the emotional and practical layers support each other. A compelling image should lead into a journey someone can understand and discuss.",
    constraints:
      "The deployed site differs from the inspected repository snapshot. Form response states do not prove email delivery. No online booking or payment flow is established by the reviewed evidence.",
    next: "Run a mobile-first inquiry walkthrough from a package card to email receipt, including a slow connection and a recoverable submission error.",
    sources: [
      { label: "Public source", href: "https://github.com/Sparrow535/SEA_travel", text: "github.com/Sparrow535/SEA_travel" },
      { label: "Live website", href: "https://spiritualescapeadventure.com/", text: "spiritualescapeadventure.com/" },
      { label: "Example itinerary", href: "https://spiritualescapeadventure.com/tours/jambay-lhakhang-drup", text: "spiritualescapeadventure.com/tours/jambay-lhakhang-drup" },
    ],
  },
];
