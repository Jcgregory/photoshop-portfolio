"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6 relative">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-vera-bold">Hi, I&apos;m Conrad 👋</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-vera-bold">
          I&apos;m a Photoshop enthusiast who loves creating visually stunning edits and designs.
          Here&apos;s a glimpse of my work.
        </p>
      </section>

      {/* Featured Work */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <Image
          src="/images/featured.jpg" // put your file in public/images/featured.jpg
          alt="Featured Photoshop Work"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center font-vera-bold">
          My latest Photoshop creation
        </p>
      </section>
    </main>
  );
}
