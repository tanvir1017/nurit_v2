type SkillAndAchievementDbType = {
  icon: string;
  title: string;
  subTitle: string;
}[];

export const skillDb: SkillAndAchievementDbType = [
  {
    icon: "/images/content/skillSet/leacture.webp",
    title: "ভিডিও লেকচার",
    subTitle: "শেখো নিজের ইচ্ছেমতো, পেয়ে যাও ২০ হাজারেরও বেশি ভিডিও লেকচার",
  },
  {
    icon: "/images/content/skillSet/practice.webp",
    title: "সুবিধামত অনুশীলন",
    subTitle: "অনুশীলন করো সুবিধামত সময়ে, মুহূর্তেই দেখে নাও তোমার স্কোর",
  },
  {
    icon: "/images/content/skillSet/live.webp",
    title: "লাইভ ক্লাস",
    subTitle: "দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজাও রাখো রুটিনমাফিক পড়াশোনা",
  },
  {
    icon: "/images/content/skillSet/quize.webp",
    title: "কুইজ টেষ্ট",
    subTitle:
      "প্রতিদিন মডিউল শেষ করেই থাকছে আকর্ষনীয় কুইজ টেষ্ট। যা তোমাকে নিয়ে যাবে ভিন্ন অভিজ্ঞতার জগতে।",
  },
  {
    icon: "/images/content/skillSet/leaderboard.webp",
    title: "দৈনিক ফলাফল ও লিডারবোর্ড",
    subTitle: "শেখার প্রতিযোগিতায় বন্ধুদের মাঝে নিজের অবস্থান দেখো লিডারবোর্ডে",
  },
  {
    icon: "/images/content/faq.webp",
    title: "প্রশ্ন করো মন খুলে",
    subTitle:
      "তোমার যেকোনো জিজ্ঞাসায় পাচ্ছো এক্সপার্ট গাইডলাইন এক প্ল্যাটফর্মে",
  },
];

export const achievementDB: SkillAndAchievementDbType = [
  {
    icon: "/images/content/achievement/teacher.webp",
    title: "৪৫০+",
    subTitle: "শিক্ষক",
  },
  {
    icon: "/images/content/achievement/student.webp",
    title: "৯৩০+",
    subTitle: "শিক্ষার্থী",
  },
  {
    icon: "/images/content/achievement/content.webp",
    title: "১২++",
    subTitle: "শিক্ষা উপকরণ",
  },
  {
    icon: "/images/content/achievement/resourceDownload.webp",
    title: "১০ কে+",
    subTitle: "ব্যবহারকারী",
  },
];

export const specialtyDB: { icon: string; shortDesc: string }[] = [
  {
    icon: "/images/content/specialty/skilled.png",
    shortDesc:
      "আইটি, সফট স্কিল, একাডেমিক এবং ক্যারিয়ার ডেভেলপমেন্টের উপর ৪০০ টির বেশি ভিডিও কোর্স।",
  },
  {
    icon: "/images/content/specialty/vide.png",
    shortDesc:
      "দক্ষ ও মানসম্মত প্রশিক্ষক দ্বারা সহজভাবে বুঝিয়ে প্রতিটি লেসন প্রস্তুত করা হয়েছে।",
  },
  {
    icon: "/images/content/specialty/topic.png",
    shortDesc:
      "টপিক শেষে মেধা যাচাইয়ের জন্য কুইজ ও এক্সামের ব্যবস্থা রয়েছে। কোর্স শেষে সনদ প্রদান।",
  },
];
