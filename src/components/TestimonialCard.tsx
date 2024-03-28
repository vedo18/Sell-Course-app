"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const developmentCoursesTestimonials = [
  {
    quote:
      "Enrolling in the web development course was one of the best decisions I've made. The instructors provided clear explanations and practical examples that helped me grasp complex concepts easily.",
    name: "Emma Watson",
    title: "Web Development Student",
  },
  {
    quote:
      "The app development course exceeded my expectations. The curriculum was up-to-date with industry standards, and the hands-on projects allowed me to build real-world applications from scratch.",
    name: "James Smith",
    title: "App Development Student",
  },
  {
    quote:
      "Studying DevOps with this platform was a game-changer for my career. The course covered a wide range of tools and methodologies, and the instructors offered invaluable insights based on their real-world experience.",
    name: "Sophia Garcia",
    title: "DevOps Student",
  },
  {
    quote:
      "I've always been interested in software engineering, and this platform provided me with the perfect resources to kickstart my career. The comprehensive courses and supportive community made the learning journey enjoyable and rewarding.",
    name: "Michael Brown",
    title: "Software Engineering Student",
  },
  {
    quote:
      "The courses on cloud computing offered here are top-notch. Whether you're a beginner or an experienced professional, you'll find valuable content that equips you with the skills needed to succeed in the rapidly evolving tech industry.",
    name: "Olivia Martinez",
    title: "Cloud Computing Student",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={developmentCoursesTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
