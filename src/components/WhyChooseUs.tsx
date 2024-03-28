import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Our platform offers courses taught by industry experts with years of experience. Learn from the best to gain practical insights and real-world skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with our interactive learning materials, including quizzes, projects, and hands-on exercises. Gain practical experience and reinforce your knowledge.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Interactive Learning
      </div>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "Our platform offers flexible scheduling options, allowing you to learn at your own pace. Access course materials anytime, anywhere, and progress at a comfortable speed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-500))] flex items-center justify-center text-white">
        Flexible Scheduling
      </div>
    ),
  },
  {
    title: "Career Support",
    description:
      "Get access to career support resources, including resume reviews, interview preparation, and job placement assistance. We're committed to helping you succeed in your career.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Career Support
      </div>
    ),
  },
  {},
];

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
