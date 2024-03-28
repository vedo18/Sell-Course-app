"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Introduction to Web Development",
      description:
        "Get started with the basics of web development and build your first website.",
      slug: "introduction-to-web-development",
      isFeatured: true,
    },
    {
      title: "Mobile App Development Workshop",
      description:
        "Learn the essentials of mobile app development and create your own app from scratch.",
      slug: "mobile-app-development-workshop",
      isFeatured: true,
    },
    {
      title: "DevOps Fundamentals Seminar",
      description:
        "Discover the key principles and practices of DevOps and streamline your development workflow.",
      slug: "devops-fundamentals-seminar",
      isFeatured: true,
    },
    {
      title: "Advanced Software Engineering Techniques",
      description:
        "Explore advanced software engineering concepts and methodologies used in industry-leading projects.",
      slug: "advanced-software-engineering-techniques",
      isFeatured: true,
    },
    {
      title: "Cloud Computing Summit",
      description:
        "Join industry experts as they discuss the latest trends and innovations in cloud computing technology.",
      slug: "cloud-computing-summit",
      isFeatured: true,
    },
    {
      title: "Cybersecurity Essentials Workshop",
      description:
        "Learn how to protect your applications and data from cyber threats with this hands-on workshop.",
      slug: "cybersecurity-essentials-workshop",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
