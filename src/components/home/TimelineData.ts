export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  achievements: string[];
  era: "vintage" | "corporate" | "modern" | "futuristic";
}

export const timelineData: TimelineEntry[] = [
  {
    year: "1968",
    title: "The Founding Era",
    description:
      "ATI (Anjuman Talaba-e-Islam) was established with a bold vision — to unite Pakistani students under the banner of Islamic values, education, and national service.",
    achievements: [
      "ATI formally established with a founding charter rooted in Islamic principles",
      "First student circles formed across Karachi and Lahore",
      "Inaugural student convention held attracting hundreds of members",
      "Core objectives defined: education, dawah, and social welfare",
    ],
    era: "vintage",
  },
  {
    year: "1975",
    title: "Grassroots Expansion",
    description:
      "Building on its early success, ATI spread its roots across Pakistan's universities and colleges, winning student union elections and establishing a strong national presence.",
    achievements: [
      "Won student union elections in multiple major universities",
      "Expanded chapters to over 50 educational institutions nationwide",
      "Launched the first national student convention attracting 5,000+ attendees",
      "Published fortnightly student magazine 'Student Voice'",
      "Established dedicated wings for social welfare and dawah activities",
    ],
    era: "vintage",
  },
  {
    year: "1985",
    title: "Rising Against Tyranny",
    description:
      "A decade of resistance and resilience — standing firm for democratic rights and student freedoms while expanding the movement's reach across the nation.",
    achievements: [
      "Led nationwide student protests for democratic rights",
      "Organized relief and rehabilitation efforts for displaced communities",
      "Expanded presence to universities in all four provinces",
      "Launched literacy drives and community education initiatives",
      "Strengthened organizational structure with province-level committees",
    ],
    era: "vintage",
  },
  {
    year: "1995",
    title: "National Recognition",
    description:
      "Gaining prominence on the national stage — recognized for educational excellence, community service, and principled student leadership across Pakistan.",
    achievements: [
      "Received national awards for community service and social impact",
      "Won major student union elections across premier universities",
      "Launched structured leadership training programs for members",
      "Organized international student conferences and seminars",
      "Women's wing established with dedicated programs and leadership roles",
    ],
    era: "corporate",
  },
  {
    year: "2005",
    title: "Growth & Consolidation",
    description:
      "A period of institutional growth — building organizational structure, strengthening chapters, and deepening community impact across Pakistan.",
    achievements: [
      "Formal chapter system established across all provinces",
      "Annual convention tradition attracting 20,000+ participants",
      "Created dedicated wings for social welfare, education, and dawah",
      "Built strong alumni network connecting generations of student leaders",
      "Launched official website and online member portal",
    ],
    era: "corporate",
  },
  {
    year: "2015",
    title: "Digital Evolution",
    description:
      "Embracing technology to amplify the message — transitioning from traditional outreach to digital platforms while maintaining a strong grassroots presence.",
    achievements: [
      "Digital campaigns reached millions across social media platforms",
      "Introduced e-learning modules for member development and training",
      "Modernized organizational structure with technology integration",
      "Hosted first virtual conferences connecting chapters nationwide",
      "Member database digitized — 30,000+ active members registered",
    ],
    era: "modern",
  },
  {
    year: "2020",
    title: "Resilience Through Crisis",
    description:
      "Rapid adaptation and innovation during the COVID-19 pandemic — ATI proved its resilience by moving fully online and serving communities in need.",
    achievements: [
      "Rapid pivot to fully online operations within weeks",
      "COVID-19 relief drives benefiting 100,000+ families across Pakistan",
      "Virtual leadership training programs launched nationwide",
      "Online social media presence grew to 500,000+ followers",
      "Organized digital fundraising campaigns for pandemic relief",
    ],
    era: "modern",
  },
  {
    year: "2023",
    title: "AI-Driven Platform",
    description:
      "Integrating cutting-edge technology for personalized member development and broader reach, while staying true to ATI's founding principles.",
    achievements: [
      "AI-powered learning platform launched for personalized education",
      "Adaptive analytics introduced for member progress tracking",
      "Member satisfaction and engagement rose to 94%",
      "Global outreach expanded to Pakistani diaspora communities",
      "Annual convention reached record 50,000+ participants",
    ],
    era: "futuristic",
  },
  {
    year: "2026",
    title: "Future Vision",
    description:
      "Rolling out the next-generation immersive learning ecosystem — ATI leads Pakistan's student movement into a bold and sustainable future.",
    achievements: [
      "Mixed-reality campus experiences and workshops operational",
      "Global student network exceeds 75,000 active members",
      "Sustainable campus and green initiative programs implemented",
      "International chapters established in 10+ countries",
      "ATI celebrated as Pakistan's most impactful student organization",
    ],
    era: "futuristic",
  },
];

export const journeyStats = [
  { label: "Members", value: 75000, suffix: "+" },
  { label: "Chapters", value: 350, suffix: "+" },
  { label: "Institutions", value: 120, suffix: "+" },
  { label: "Years of Impact", value: 58, suffix: "" },
];
