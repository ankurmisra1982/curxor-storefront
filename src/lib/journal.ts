/**
 * CurXor Journal — content hub on curxor.ai/journal
 * Kinds: essay · update · release · brief
 * Sources: founder FPV essays · press kit · public-safe release notes
 * Desk crew / crewmate naming locked. No G-milestone codes in public copy.
 * Full archives stay at /changelog and /press — journal only ships SEO-worthy selections.
 */

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type JournalKind = "essay" | "update" | "release" | "brief";

export const journalKindLabel: Record<JournalKind, string> = {
  essay: "Essay",
  update: "Update",
  release: "Release",
  brief: "Brief",
};

export type JournalEntry = {
  slug: string;
  kind: JournalKind;
  title: string;
  metaDescription: string;
  publishedAt: string;
  excerpt: string;
  sourceLabel: string;
  author: string;
  xUrl?: string;
  relatedLinks: { href: string; label: string }[];
  body: JournalBlock[];
};

/** @deprecated Use JournalEntry */
export type JournalEssay = JournalEntry;

export const journalIndexMeta = {
  title: "Journal",
  description:
    "CurXor journal — founder essays, product updates, OS release notes, and briefs on sovereign AI desks, digital employees, and owning the operate plane.",
} as const;

export const journalArchiveLinks = [
  { href: "/changelog", label: "Full changelog" },
  { href: "/press", label: "Press kit" },
  { href: "/architecture", label: "Architecture" },
] as const;

export const journalEssays: JournalEntry[] = [
  {
    slug: "category-vision-film",
    kind: "update",
    title: "Category Vision Film — Desk Crew on Metal You Own",
    metaDescription:
      "CurXor category vision film is live on /signal — desk crew, Crew Cafe, approval gate, personal algorithm on metal you own. Vision comps with voiceover; product proof is real MS-S1 capture.",
    publishedAt: "2026-08-04",
    excerpt:
      "They live here. You conduct. Personal algorithm on metal you own — with an honest line between vision comps and product proof.",
    sourceLabel: "Company update · category film",
    author: "CurXor Systems",
    relatedLinks: [
      { href: "/signal#category-film", label: "Watch on /signal" },
      { href: "/demo/hero-category-badge-v5.01.mp4", label: "Category vision (~91s)" },
      { href: "/demo/hero-category-badge-v4.mp4", label: "Shorter version (~62s)" },
      { href: "/press", label: "Press kit" },
      { href: "/journal/harness-is-the-product", label: "The harness is the product" },
    ],
    body: [
      {
        type: "h2",
        text: "What shipped",
      },
      {
        type: "p",
        text: "The category vision film is live on /signal — about ninety-one seconds of desk crew, always-on life, and the approval gate. A shorter version (~62s) is there if you want the faster watch. Product proof (~89s) is the second tab: Capital, Creator, and Outreach captured on real MS-S1 metal.",
      },
      {
        type: "p",
        text: "The homepage does not autoplay it. Quiet link only: Watch category film → /signal#category-film.",
      },
      {
        type: "h2",
        text: "What the film says",
      },
      {
        type: "ul",
        items: [
          "Everyone’s renting intelligence — access without ownership is rent",
          "They live here. You conduct — Crew Cafe as the hall for the desk crew",
          "Capital, Creator, Outreach on your metal — nothing leaves without your approval",
          "Forge a new crewmate anytime",
          "Your personal algorithm — on metal you own",
          "Your AI server. On your desk. Designed around you. Owned by you.",
        ],
      },
      {
        type: "h2",
        text: "Honesty",
      },
      {
        type: "p",
        text: "The vision film mixes concept comps and voiceover with real operate-plane UI. It is not a VR SKU and not a claim that every surface is a live customer fleet. The product-proof tab is the capture path: onboarding through Capital, Creator, and Outreach on the box.",
      },
      {
        type: "p",
        text: "Mission, Vision, and Purpose in the film match the site: operator as principal · AI team as extension of you · personal algorithm you own. Pre-revenue. Still shipping.",
      },
    ],
  },
  {
    slug: "harness-is-the-product",
    kind: "essay",
    title: "Why I'm Building CurXor — The Harness Is the Product",
    metaDescription:
      "Models are weather. The scarce layer is the harness — memory, profile, tools, approval — on metal you own. Ankur Misra on the desk that absorbs the swap.",
    publishedAt: "2026-07-30",
    excerpt:
      "Thought derives intelligence. Models commoditize. The product is the harness that runs you — with a desk crew deriving work on metal you own.",
    sourceLabel: "Founder essay v0.4 · exposed Jul 30, 2026",
    author: "Ankur Misra",
    xUrl: "https://x.com/ankurmisra/status/2082906591913824351",
    relatedLinks: [
      { href: "/journal/mint-autonomous-employees", label: "What digital employees means here" },
      { href: "/signal", label: "Signal · The Neural Link" },
      { href: "/architecture", label: "Stack & architecture" },
      { href: "/#subscribe", label: "Join the waitlist" },
    ],
    body: [
      {
        type: "h2",
        text: "What derives intelligence?",
      },
      {
        type: "p",
        text: "I led the last essay with a simple cut: take away the A. What is intelligence?",
      },
      {
        type: "p",
        text: "The next question is harder — and more useful for builders. What derives it?",
      },
      {
        type: "p",
        text: "Thought. Distillation through a life. Books, culture, the open web, lived experience — absorbed, transformed, kept. Through all of that, the profile spine of who you are remains.",
      },
      {
        type: "p",
        text: "Labs will keep arguing about thinking. Distillation will keep showing up as the word of the week. I'm not here to settle that debate. I'm asking where the intelligence an operator actually uses comes from — and whether it should belong to a universal thought-leader, or to a person.",
      },
      {
        type: "p",
        text: "It should be personal. That is why I am building CurXor.",
      },
      {
        type: "h2",
        text: "Models are weather. The harness is the product.",
      },
      {
        type: "p",
        text: "Models get cheaper, better, and more interchangeable. That is not a crisis. That is weather. Open weights make intelligence more scalable over time. That matters. It is still weather.",
      },
      {
        type: "p",
        text: "The scarce layer is the harness — the applied system outside the checkpoint: memory, profile, tools, approval, jobs, scar tissue. Your rules. Your taste. Your style. The words you choose. The memory files of you. Better models make that layer more ambitious, not obsolete.",
      },
      {
        type: "p",
        text: "The harness is the product. The harness runs you — with a desk crew deriving work on your behalf.",
      },
      {
        type: "p",
        text: 'Someone close to an operator put it as "AI is a better version of yourself." I would tighten that. Not a better version of you. You — with more capability.',
      },
      {
        type: "h2",
        text: "The desk that absorbs the swap",
      },
      {
        type: "p",
        text: "Six weeks into shipping CurXor, we asked a simple question on the box: is our local brain stale?",
      },
      {
        type: "p",
        text: "The reasoning model was a generation behind. The inference runtime was a few versions behind. We updated both on the same MS-S1 MAX.",
      },
      {
        type: "p",
        text: "The desk adapted. Work stayed local. Still yours.",
      },
      {
        type: "p",
        text: "If removing one model breaks your system, you didn't own a desk. You rented a brain. You don't have a place you come back to.",
      },
      {
        type: "p",
        text: "We swapped. Everything else remained. Nothing skipped a beat. Thought intact. Memory intact. Models churn. Ownership is the durable layer.",
      },
      {
        type: "h2",
        text: "Access without ownership is still rent",
      },
      {
        type: "p",
        text: "That is the control test I care about. Frontier checkpoints are perishable. Architecture you own survives the swap. The applied layer — memory, profile, tools, approval — does not rewrite itself every time a lab ships a new release. It grows as you do.",
      },
      {
        type: "p",
        text: 'The defining question of the age isn\'t whether powerful AI will exist. It\'s who gets access — a few institutions, or a tool that can empower everyone. I agree with that frame. I would add the clause operators feel every day: access without ownership is still rent.',
      },
      {
        type: "p",
        text: "Homelab culture already proved the rent-versus-own math for people willing to duct-tape. CurXor ships the appliance desk — not a tutorial.",
      },
      {
        type: "h2",
        text: "Why CurXor now",
      },
      {
        type: "p",
        text: "Because the stack is moving at speeds that punish rented-only setups. In early sessions with operators, the enthusiasm was not for a model card. It was for what this could be: what I could use it for, how I store it, being offline, keeping it on my paper.",
      },
      {
        type: "p",
        text: "Naval still lands: you can do almost anything — you have to know what you want to do.",
      },
      {
        type: "h2",
        text: "Desk crew",
      },
      {
        type: "p",
        text: "That is what a desk crew is for — digital employees, jobs with gates. Each crewmate owns a lane. They live in Crew Cafe — a home for the work on your box, not another chat tab. They let you explore what can be done while you stay the principal. Local by default. Bring your own keys when you need more intelligence for a turn.",
      },
      {
        type: "p",
        text: "The offer I'm almost willing to say out loud: a one-time payment for hardware that is capable and software that delivers — about four thousand dollars — your personal algorithm on metal you own. Not another tab you rent forever.",
      },
      {
        type: "h2",
        text: "Purpose",
      },
      {
        type: "p",
        text: "Purpose, for us, is simple: your personal algorithm — built with your companion AI — that you own. Not universal. Extremely personal. You with more capability. Aligned with how you think and what you care about.",
      },
      {
        type: "h2",
        text: "You, extended",
      },
      {
        type: "p",
        text: "Back in 2005 I started writing a book — Over Time — about execution extended at light speed: arrive anywhere with anything. Still being written. The players changed. The need did not.",
      },
      {
        type: "p",
        text: "I am building this for a life that has to last — not for a demo week. In June I named the commitment in public, then stopped waiting for perfect conditions and started shipping the box. Weeks in, I am living it — not as a pitch deck. As desk time.",
      },
      {
        type: "p",
        text: "The slogans say: if you don't use AI, AI will use you. I don't agree with the surrender in that line. We need our own AI. That is what this box is for. You stay the principal.",
      },
      {
        type: "p",
        text: "We are still early. Pre-revenue. Real metal. Real operators starting to sit down. The brain can swap and your thought stays intact. That is why I am building CurXor.",
      },
    ],
  },
  {
    slug: "intelligence-and-the-desk",
    kind: "essay",
    title: "Why I'm Building CurXor — Intelligence and the Desk",
    metaDescription:
      "Strip the A — what is intelligence, who stays principal, and what product lets operators run it at scale on metal they own? Ankur Misra on the desk above model churn.",
    publishedAt: "2026-07-16",
    excerpt:
      "AI is supplemental to intelligence. Humans are not supplemental to the Earth. The product question: who stays principal while intelligence scales?",
    sourceLabel: "Founder essay v0.3 · shipped Jul 16, 2026",
    author: "Ankur Misra",
    xUrl: "https://x.com/ankurmisra/status/2077811354858144026",
    relatedLinks: [
      { href: "/about", label: "Mission, Vision & Purpose" },
      { href: "/compare", label: "Compare alternatives" },
      { href: "/pricing", label: "Pricing" },
    ],
    body: [
      {
        type: "h2",
        text: "Take away the A",
      },
      {
        type: "p",
        text: "Everyone asks what AI can do. Strip the A. What is I — intelligence?",
      },
      {
        type: "p",
        text: "Is it good or bad? Wrong question. That fight already divides us. It is the wrong fight for builders.",
      },
      {
        type: "quote",
        text: "AI is supplemental to intelligence. Humans are not supplemental to the Earth.",
      },
      {
        type: "p",
        text: "I am not writing a cosmology paper. I am writing why I ship a desk. Because intelligence will keep scaling — models, agents, benchmarks, titles. The question that actually matters for operators is simpler: who stays the principal while that happens? Do you own a system that holds your work, or do you rent a tab forever?",
      },
      {
        type: "h2",
        text: 'From grammar to "I still couldn\'t ship"',
      },
      {
        type: "p",
        text: "A few weeks ago someone told me, almost casually: they use AI every day — but mostly for grammar and basic stuff. Not behind. Under-leveraged. That conversation became the last essay.",
      },
      {
        type: "p",
        text: "This week the pattern evolved. People first understate it — \"some stuff,\" \"not really\" — then later admit they use it for everything. Mainstream is past pure polish. People are trying to get real work done.",
      },
      {
        type: "p",
        text: "The failure mode changed with them. It used to be: I only polish text. Now it is: AI told me the steps — and I still couldn't ship.",
      },
      {
        type: "p",
        text: "A friend wanted to take a cute dog photo and make it go viral on Instagram. GPT walked him through every step. Assets ended up on Drive. Nothing published. Advice was not the missing piece. A desk that runs draft → approve → publish was.",
      },
      {
        type: "p",
        text: 'Naval put the hinge more cleanly than most product decks: "You have to know what you want—that\'s actually the hardest thing." Out-of-the-box digital employees do not replace human want. They scaffold "I want this" so operators do not have to invent the whole product from a blank chat tab every morning.',
      },
      {
        type: "h2",
        text: "The rent reckoning",
      },
      {
        type: "p",
        text: "Meanwhile the tip of the spear is already living in overnight agents, routers, and harnesses. Token spend can race ahead of outcomes. The market's default answer is still more cloud, more swaps, more chat tabs.",
      },
      {
        type: "p",
        text: "That is the wrong layer if you want durable work. Enterprises feel a version of this as rent without lift. Ordinary operators feel it as assembly tax: steps without a system. Same root — rented cognition, no desk that stays on when the tab closes.",
      },
      {
        type: "h2",
        text: "Desk above the churn",
      },
      {
        type: "p",
        text: "Model of the week is not a workflow. Routers optimize tokens. We optimize the job that outlives the model.",
      },
      {
        type: "p",
        text: "I am not building a headless auto-swapper. Those already exist as cloud gateways. I am building the appliance that keeps your desk crew when the model changes.",
      },
      {
        type: "quote",
        text: "AI evolves so fast that last year's technique gets replaced. The work we apply it to stays constant — it just gets better at doing that work.",
      },
      {
        type: "p",
        text: "Capital. Creation. Outreach. Estate paperwork. Household ops. The jobs do not reinvent themselves every quarter. The stack does. So I am not selling a better prompt. I am selling the desk that holds the work while the stack upgrades.",
      },
      {
        type: "h2",
        text: "Agnostic on purpose",
      },
      {
        type: "ul",
        items: [
          "Models: local open weights by default · frontier BYOK when the job needs it",
          "Metal: commodity you own — not one ecosystem's garden",
          "OS: Linux underneath · CurXor OS on top",
          "Providers: swap without rebuilding the desk",
        ],
      },
      {
        type: "p",
        text: "No Apple lock-in as a religion. No CUDA-only prison as destiny. You own it end to end — metal, agents, egress. Operator control is not \"no rules.\" You approve what leaves the box.",
      },
      {
        type: "h2",
        text: "Why CurXor is the viable answer for now",
      },
      {
        type: "p",
        text: "CurXor is a sovereign AI desk on bare metal you own. One appliance. CurXor OS. A desk crew of digital employees — Capital, Creator, Outreach demo-ready — plus The Forge to mint more. Local inference. Flight Command on your LAN. Outbound only when you wire the egress port.",
      },
      {
        type: "p",
        text: "$3,999 once. $0/mo API for the operate plane.",
      },
      {
        type: "p",
        text: "Mission — make the operator the principal of their AI. Vision — an AI team as an extension of yourself on metal you own. Purpose — your personal algorithm, built with your companion AI, that you own.",
      },
      {
        type: "p",
        text: "Honest status: we are pre-revenue. Working product on real MS-S1-class metal. Flagship desks demo-ready; preview modules labeled honestly. Published mesh benchmarks pending. We do not pretend otherwise.",
      },
      {
        type: "h2",
        text: "Principal, not passenger",
      },
      {
        type: "p",
        text: "Intelligence will keep scaling. Titles will keep dying. The work stays. The question is whether you remain the composer of your score — or rent the theater forever.",
      },
      {
        type: "p",
        text: "Designed around you. Owned by you. Agnostic so the desk survives the next model war.",
      },
    ],
  },
  {
    slug: "shallow-usage-gap",
    kind: "essay",
    title: "Why I'm Building CurXor — The Shallow Usage Gap",
    metaDescription:
      "Most people use AI every day — for grammar and basics. Under-leveraged, not behind. Ankur Misra on closing the gap from chat polish to always-on work on metal you own.",
    publishedAt: "2026-06-27",
    excerpt:
      '"I use it almost every day — but just grammar and basic stuff." That is the whole market in two sentences.',
    sourceLabel: "Founder essay v0.2 · Jun 27, 2026",
    author: "Ankur Misra",
    relatedLinks: [
      { href: "/for/creators", label: "For creators" },
      { href: "/for/traders", label: "For traders" },
      { href: "/#how-it-works", label: "How it works" },
    ],
    body: [
      {
        type: "h2",
        text: '"I use it almost every day."',
      },
      {
        type: "p",
        text: "I met someone — smart, employed, not a developer — and asked if they use AI.",
      },
      {
        type: "p",
        text: '"Yes. Almost every day." Then, without prompting: "But I feel like I\'m not using it for what I could be. Just grammar and basic stuff."',
      },
      {
        type: "p",
        text: "That is the whole market in two sentences. They are not an AI skeptic. They are not behind. They are under-leveraged. They opened the tool. They use it for polish and small tasks. They can feel the gap between that and what the demos promise — investing rules, content engines, outreach that runs while you sleep — but they do not have a path from \"help me fix this email\" to \"run a piece of my life.\"",
      },
      {
        type: "p",
        text: "I told them: that is exactly what I am building toward. Not a smarter spell-check. The ability for an average person to leverage AI at a much larger scale — without becoming a part-time engineer.",
      },
      {
        type: "h2",
        text: "AI is everywhere. Depth is not.",
      },
      {
        type: "p",
        text: "Most people already passed the first hurdle. They have ChatGPT or Claude or Gemini in their pocket. They use it for drafting, coding, research, replies — for almost everything, but not deeply.",
      },
      {
        type: "ul",
        items: [
          "A bot that runs your investing rules and publishes the narrative — operator, not lurker",
          "A headless content engine — always drafting, always scheduling",
          "A shop with marketing baked in, not bolted on afterward",
          "An always-on agent that works while you sleep",
        ],
      },
      {
        type: "p",
        text: "Technical people open a coding agent at midnight and get close for an hour. Then life happens. The stack fragments. API bills creep. Nothing stays on. Ordinary people never get past grammar — not because they are dumb, because there is no product that closes the gap.",
      },
      {
        type: "h2",
        text: "The demo went viral months ago. The headline was Tuesday.",
      },
      {
        type: "p",
        text: "I have carried one thought since the open agent demo wave went viral: this should not be a weekend project you duct-tape together. It should ship out of the box — local inference, agent loops, skills, bridges, a command surface you own. One appliance. Plug it in. Mint your digital employees. No assembly required.",
      },
      {
        type: "p",
        text: "June 18 happened — the whole timeline lit up about who owns the cognitive layer. I had a spec. I named CurXor in public. About twenty-four hours later, I started shipping.",
      },
      {
        type: "h2",
        text: "What CurXor is",
      },
      {
        type: "p",
        text: "CurXor is a sovereign AI desk on bare metal you own. One box. One operating system. A desk crew of autonomous digital employees — plus The Forge to mint more.",
      },
      {
        type: "ul",
        items: [
          "Local inference on your metal — $0/mo API for the operate plane",
          "Outbound only when you wire it — trades, posts, and bridges egress through a port you can unplug",
          "Flight Command — the command surface on your LAN",
          "$3,999 once — not another subscription disguised as freedom",
        ],
      },
      {
        type: "p",
        text: "Plain English for the grammar user: you are not buying a smarter autocomplete. You are buying a desk where AI employees show up for work — and stay on when you close the tab.",
      },
      {
        type: "h2",
        text: "Where we are today (honest)",
      },
      {
        type: "p",
        text: "Working product on real MS-S1-class metal. Flagship desks — Capital, Creator, Outreach — demo-ready day one. Preview modules labeled honestly. Pre-revenue. Published mesh benchmarks pending. If you are evaluating CurXor: judge us on the build path and the golden-path walkthrough, not on mock depth that confuses a demo with a product.",
      },
      {
        type: "quote",
        text: "The demo went viral months ago. The headline was Tuesday. I started shipping the box on Wednesday.",
      },
      {
        type: "p",
        text: 'And someone reminded me why: "I use it almost every day — but not for what I could be." That is still the whole company.',
      },
    ],
  },
  {
    slug: "why-im-building-curxor",
    kind: "essay",
    title: "Why I'm Building CurXor",
    metaDescription:
      "Open agent demos proved demand. Almost nobody shipped the appliance. Ankur Misra on naming CurXor in public and starting to ship the sovereign AI desk.",
    publishedAt: "2026-06-19",
    excerpt:
      "The bottleneck isn't the next interface. It's that autonomous AI still lives on someone else's meter. CurXor ships the appliance.",
    sourceLabel: "Founder essay v1 · Jun 2026 origin",
    author: "Ankur Misra",
    xUrl: "https://x.com/ankurmisra/status/2070024704925077702",
    relatedLinks: [
      { href: "/signal", label: "Interfaces drift · Signal" },
      { href: "/press", label: "Press & facts" },
      { href: "/#subscribe", label: "Join the waitlist" },
    ],
    body: [
      {
        type: "h2",
        text: "AI is everywhere. Then what?",
      },
      {
        type: "p",
        text: "AI is everywhere now. The line you hear constantly: use AI, or AI will use you.",
      },
      {
        type: "p",
        text: "If you live inside the technical feed, you see agent frameworks, new startups every week, another demo that makes the last one feel old. Most of us already use AI for drafting, coding, research, replies — for almost everything, but not deeply. Not in the way the demos promise.",
      },
      {
        type: "ul",
        items: [
          "A bot that runs your investing rules and publishes the narrative",
          "A headless content engine — always drafting, always scheduling",
          "A shop with marketing baked in, not bolted on afterward",
          "An always-on agent that works while you sleep",
        ],
      },
      {
        type: "p",
        text: "We talk about it. We sketch it. We get close for an hour. Then life happens. The stack fragments. API bills creep. Nothing stays on. It is not feasible for an ordinary person. It is barely feasible for an ordinary techie.",
      },
      {
        type: "h2",
        text: "The demo went viral months ago. The headline was Tuesday.",
      },
      {
        type: "p",
        text: "I have carried one thought since the open agent wave went viral: this should not be a weekend project you duct-tape together. It should ship out of the box — local inference, agent loops, skills, bridges, a command surface you own. One appliance. Plug it in. Mint your digital employees. No assembly required.",
      },
      {
        type: "p",
        text: "June 18 happened. Everyone had opinions about who owns the cognitive layer. I had a spec. Within hours I posted a thread naming what the ecosystem still does not ship: a sovereign edge box as your personal server and cognitive hub — on metal you control.",
      },
      {
        type: "p",
        text: "I changed my name and bio. Not \"thinking about it.\" Public commitment. About twenty-four hours later, I started shipping.",
      },
      {
        type: "h2",
        text: "Not just for me. For everyone.",
      },
      {
        type: "p",
        text: "At first this was personal. I wanted the desk I kept describing — Capital working rules, Creator shipping posts, Outreach running sequences, inference local, egress controlled.",
      },
      {
        type: "p",
        text: "Then it became obvious: if I need this, thousands of operators need this. Founders. Solo builders. Family offices. Creators who are tired of renting their cognition from a meter that never stops.",
      },
      {
        type: "p",
        text: "I am not only building it for myself. I am unleashing it for everyone. That is CurXor.",
      },
      {
        type: "p",
        text: "The beauty is not that it does one trick on day one. It grows with you. Start with flagship desks. Add household context when it matters. Wire Signal when devices show up. The same OS, the same desk — more surface area over time, not a new subscription every time you add a workflow.",
      },
      {
        type: "h2",
        text: "The wrong question",
      },
      {
        type: "p",
        text: "Everyone is asking what the next interface is. Glasses. Pins. VR. Robots. Room screens. They multiply.",
      },
      {
        type: "p",
        text: "That is not the bottleneck. The bottleneck is that autonomous AI still lives on someone else's meter — frontier APIs, rented GPUs, hosted agents, duct-taped weekend projects that never become a product.",
      },
      {
        type: "p",
        text: "Open agent runtimes proved the demand. Millions of people saw what agents could do. Almost nobody shipped the appliance.",
      },
      {
        type: "quote",
        text: "Interfaces drift. Your desk conducts.",
      },
      {
        type: "p",
        text: "CurXor is that desk — CurXor OS, a desk crew of digital employees, Flight Command on your LAN, $3,999 once, $0/mo API for the operate plane. Pre-revenue. Real metal. Building in public on purpose.",
      },
    ],
  },
  {
    slug: "appliance-not-diy",
    kind: "brief",
    title: "The Appliance, Not the Weekend Project",
    metaDescription:
      "Mac Studio + Ollama proves local inference. CurXor ships the turnkey desk — digital employees, egress you control, $3,999 once. Why DIY isn't the product.",
    publishedAt: "2026-08-02",
    excerpt:
      "Homelab and Mac Studio + Ollama prove you can run models locally. The missing product is the appliance desk that owns the jobs — not another install script.",
    sourceLabel: "Journal brief · compare + founder thesis",
    author: "Ankur Misra",
    relatedLinks: [
      { href: "/compare/mac-studio-ollama", label: "vs Mac Studio + Ollama" },
      { href: "/compare/clawbox", label: "vs ClawBox" },
      { href: "/compare", label: "All comparisons" },
      { href: "/pricing", label: "Pricing" },
    ],
    body: [
      {
        type: "h2",
        text: "Local inference is not a desk",
      },
      {
        type: "p",
        text: "A powerful Mac running Ollama is a real thing. Homelab culture already proved the rent-versus-own math for people willing to duct-tape. None of that is the product I am shipping.",
      },
      {
        type: "p",
        text: "Local inference answers: can tokens run on metal I own? A desk answers: who holds the jobs — capital rules, content pipelines, outreach sequences — when the model of the week changes?",
      },
      {
        type: "p",
        text: "CurXor is the second answer. Appliance + CurXor OS + a desk crew of digital employees. Not a tutorial. Not a repo with a prayer.",
      },
      {
        type: "p",
        text: "The AI runs on your box — installed on your metal, not in a cloud tab. No internet required to think — BYOK and bridges use the network when you choose them.",
      },
      {
        type: "h2",
        text: "What DIY quietly taxes you for",
      },
      {
        type: "ul",
        items: [
          "Assembly — wire models, tools, memory, bridges, approvals yourself",
          "Security — harden egress, secrets, and identity without a product boundary",
          "Jobs — invent Capital / Creator / Outreach workflows from a blank chat tab",
          "Durability — when the model swaps, rebuild the scaffolding",
        ],
      },
      {
        type: "p",
        text: "That tax is fine if you are the midnight engineer. It is fatal for the person who already uses AI every day and still stalls at grammar — or who has assets on Drive and still cannot publish.",
      },
      {
        type: "h2",
        text: "What the appliance includes",
      },
      {
        type: "ul",
        items: [
          "64GB UMA · 126 TOPS NPU class metal — local operate plane",
          "Flagship desks demo-ready: Capital, Creator, Outreach",
          "The Forge to mint more crewmates in natural language",
          "Crew Cafe — home for the work on your box, not another tab",
          "eno2 egress kill switch — unplug outbound when you want silence",
          "$3,999 once · $0/mo CurXor API for the operate plane",
        ],
      },
      {
        type: "p",
        text: "Preview modules stay labeled Preview. We do not sell mock depth as shipped. Published mesh benchmarks pending — we will not invent latency theater.",
      },
      {
        type: "h2",
        text: "Honest foil, not dunk",
      },
      {
        type: "p",
        text: "Mac Studio + Ollama is excellent DIY inference. ClawBox-class Jetson boxes are lightweight assistants. Cloud \"personal computers\" rent orchestration by the month. CurXor sits in a different category: an independent computer for digital employees — turnkey desks, operator approve loops, metal you own.",
      },
      {
        type: "p",
        text: "If you want to build the stack yourself, you should. If you want the desk without becoming a part-time SRE for your own agents, that is who CurXor is for.",
      },
      {
        type: "p",
        text: "Compare tables live on the site. Read them. Then decide whether you want another weekend — or a box that shows up for work.",
      },
    ],
  },
  {
    slug: "mint-autonomous-employees",
    kind: "brief",
    title: "Mint Autonomous Employees on Bare Metal",
    metaDescription:
      "What CurXor means by digital employees on a sovereign AI appliance — Capital, Creator, Outreach day one, local inference, $3,999 once, $0/mo API rent.",
    publishedAt: "2026-08-02",
    excerpt:
      "Category plain English: not another chat tab. A desk crew of digital employees on metal you own — mint, conduct, stay principal.",
    sourceLabel: "Journal brief · category spine",
    author: "CurXor Systems",
    relatedLinks: [
      { href: "/journal/harness-is-the-product", label: "The harness is the product" },
      { href: "/pricing", label: "Pricing" },
      { href: "/for/traders", label: "For traders" },
      { href: "/for/creators", label: "For creators" },
      { href: "/#subscribe", label: "Join the waitlist" },
    ],
    body: [
      {
        type: "h2",
        text: "The category in one line",
      },
      {
        type: "p",
        text: "Mint autonomous employees on bare metal. That is the category CurXor is building — not a smarter autocomplete, not a cloud seat that meters every token.",
      },
      {
        type: "p",
        text: "On the homepage we lead with ownership: your AI team, on a box you own. In search and meta we keep the category spine clear so buyers evaluating sovereign AI hardware and local agent appliances can find the desk.",
      },
      {
        type: "h2",
        text: "Digital employees, not chatbots",
      },
      {
        type: "p",
        text: "A digital employee owns a lane — capital rules, content loops, outreach sequences — with approve gates and a home on your appliance. Collectively that is your desk crew. Each person on the roster is a crewmate.",
      },
      {
        type: "ul",
        items: [
          "Flagship desks demo-ready day one: Capital, Creator, Outreach",
          "The Forge — mint more crewmates in natural language",
          "Crew Cafe — home for the work on your box, not another tab",
          "Preview modules labeled honestly until depth ships",
        ],
      },
      {
        type: "h2",
        text: "What you buy",
      },
      {
        type: "p",
        text: "A desk appliance with CurXor OS — 64GB-class unified memory, local inference by default, Flight Command on your LAN, dual ethernet with an egress kill switch you can unplug. $3,999 once. $0/mo CurXor API for the operate plane. Bring your own keys when a job needs frontier intelligence for a turn.",
      },
      {
        type: "p",
        text: "Pre-revenue. Working product on real MS-S1-class metal. Published mesh benchmarks pending. Subscribe for launch updates; pre-order when you are ready.",
      },
    ],
  },
  {
    slug: "working-product-on-real-metal",
    kind: "update",
    title: "Working Product on Real Metal",
    metaDescription:
      "CurXor status for operators and media: MS-S1 MAX appliance running CurXor OS, flagship desks demo-ready, local inference on box, pre-revenue — honest traction without theater.",
    publishedAt: "2026-07-08",
    excerpt:
      "Not a laptop demo pretending to be an appliance. CurXor OS on MS-S1-class metal — flagship desks, local inference, bridges proven on the founder MS-S1. Pre-revenue. Design-partner sessions private.",
    sourceLabel: "Company update · status",
    author: "CurXor Systems",
    relatedLinks: [
      { href: "/press", label: "Full press kit" },
      { href: "/architecture", label: "Architecture & validation" },
      { href: "/changelog", label: "Changelog" },
      { href: "/#demo", label: "Flight Command demo" },
      { href: "/#subscribe", label: "Join the waitlist" },
    ],
    body: [
      {
        type: "h2",
        text: "What is true today",
      },
      {
        type: "p",
        text: "CurXor Systems builds curXor — a 64GB sovereign AI appliance that runs a desk crew of digital employees on bare metal. Buyers pay once for hardware. CurXor does not bill per token for the operate plane.",
      },
      {
        type: "ul",
        items: [
          "MS-S1 MAX unboxed and running CurXor OS on Ubuntu",
          "Local inference validated on Standard 64 (qwen3:8b class path · ~38 tok/s on our default stack)",
          "Flagship desks — Capital, Creator, Outreach — demo-ready with Flight Command on the LAN",
          "Priority bridges green on the founder MS-S1 (Capital stays paper)",
          "Design partners completed remote golden-path sessions — feedback private; not a customer fleet; not closed traction",
        ],
      },
      {
        type: "h2",
        text: "What we do not claim",
      },
      {
        type: "ul",
        items: [
          "Live brokerage fills at customer scale",
          "Published mesh latency benchmarks — pending",
          "Production OTA fleet artifact for every box",
          "Every roster module at flagship depth — previews stay labeled Preview",
        ],
      },
      {
        type: "quote",
        text: "ChatGPT bills per token. CurXor bills once. Your alpha stays on your metal.",
      },
      {
        type: "p",
        text: "For media and investors: copy-paste boilerplate, fact sheet, and film assets live on the press kit. For operators: join the waitlist and watch the ship log.",
      },
    ],
  },
  {
    slug: "crew-cafe",
    kind: "update",
    title: "Crew Cafe — Growth Home on Your Appliance",
    metaDescription:
      "Crew Cafe ties cross-crew XP and presence to real Capital, Creator, and Outreach activity on your CurXor appliance — not a cloud leaderboard.",
    publishedAt: "2026-06-29",
    excerpt:
      "Cross-crew growth on metal you own. Ascension and the pixel room react to Flagship desk activity — a home for the work, not another chat tab.",
    sourceLabel: "Product update · OS 0.9.1 era",
    author: "CurXor Systems",
    relatedLinks: [
      { href: "/architecture#desk-crew-roster", label: "Desk crew roster" },
      { href: "/journal/curxor-os-v1-0-3", label: "CurXor OS v1.0.3 notes" },
      { href: "/#demo", label: "Demo captures" },
      { href: "/compare", label: "Compare alternatives" },
    ],
    body: [
      {
        type: "h2",
        text: "Why Cafe exists",
      },
      {
        type: "p",
        text: "Flagship desks do the jobs. Crew Cafe is where the desk crew feels present — XP, streaks, and level-up moments tied to real Capital, Creator, and Outreach activity on your appliance.",
      },
      {
        type: "p",
        text: "It is not a cloud leaderboard. It is not a social network bolted on for engagement theater. It reads events from the desks you already run.",
      },
      {
        type: "h2",
        text: "What shipped in that wave",
      },
      {
        type: "ul",
        items: [
          "Ascension XP and pixel room react to Flagship desk activity",
          "Cross-crew growth moments on the box — local by default",
          "Storefront and press surfaces aligned to working product on real metal",
          "Golden-path networking on the appliance — command and egress ports you control",
        ],
      },
      {
        type: "p",
        text: "Later releases hardened Cafe feed sort, Forge hygiene, and box verification. Full version history stays on the changelog; this note is the buyer-facing why.",
      },
    ],
  },
  {
    slug: "curxor-os-v1-0-3",
    kind: "release",
    title: "CurXor OS v1.0.3 — Release Notes",
    metaDescription:
      "CurXor OS v1.0.3 stable: Firecrawl bridge, import safety gate, xAI Grok frontier provider option, Crew Cafe naming polish, event bus hardening, MS-S1 box verification.",
    publishedAt: "2026-07-08",
    excerpt:
      "Stable channel release — depth on bridges and quality gates, Cafe polish, event bus hardening, and box verification on MS-S1.",
    sourceLabel: "Release · stable · full log on /changelog",
    author: "CurXor Systems",
    relatedLinks: [
      { href: "/changelog", label: "Full changelog" },
      { href: "/journal/working-product-on-real-metal", label: "Working product update" },
      { href: "/journal/crew-cafe", label: "Crew Cafe" },
      { href: "/architecture", label: "Architecture" },
    ],
    body: [
      {
        type: "h2",
        text: "v1.0.3 · July 8, 2026 · stable",
      },
      {
        type: "p",
        text: "Public highlights for operators evaluating the stack. See /changelog for the full release list.",
      },
      {
        type: "ul",
        items: [
          "Depth release — Firecrawl bridge paths, import safety gate, optional xAI Grok as a frontier provider when you bring your own key",
          "Forge hygiene — cleaner forged-desk registry and QA guardrails",
          "Crew Cafe naming polish — desk-crew naming finalized for operator UI",
          "OS event bus hardening — serialized log writes and atomic dedupe emits",
          "Cafe feed fix — chronological sort after XP sync; demo tour awaits Cafe ingest",
          "Box verified — appliance QA suite and Capital handshake proven on MS-S1",
        ],
      },
      {
        type: "h2",
        text: "Honesty",
      },
      {
        type: "p",
        text: "Validated on MS-S1 at this release. Pre-revenue. Published mesh benchmarks still pending. Flagship desks demo-ready; Preview modules remain labeled Preview.",
      },
      {
        type: "p",
        text: "Every version continues to land on the changelog. Journal release notes are for search and humans — not a second source of truth.",
      },
    ],
  },
];

export function getJournalEssay(slug: string): JournalEntry | undefined {
  return journalEssays.find((essay) => essay.slug === slug);
}

export const getJournalEntry = getJournalEssay;

/** Newest first for index. */
export function journalEssaysNewestFirst(): JournalEntry[] {
  return [...journalEssays].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );
}

export const journalEntriesNewestFirst = journalEssaysNewestFirst;

export function journalEntriesByKind(kind: JournalKind): JournalEntry[] {
  return journalEssaysNewestFirst().filter((entry) => entry.kind === kind);
}

export function formatJournalDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
