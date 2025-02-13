import { bir, ikki, uch, tort } from "@/images";
import Image from "next/image";
import Link from "next/link";

export default function CampusLife() {
  return (
    <section className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16 lg:py-24">
      <div className="container flex items-center gap-4 sm:gap-6 md:gap-9 overflow-x-auto">
        {/* Heading */}
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-thin tracking-tight whitespace-nowrap flex-shrink-0">
          Kampus hayoti
          <span className="inline-block ml-2 sm:ml-4 transform hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </h3>

        {/* Images Row */}
        <div className="flex gap-3 sm:gap-4 flex-nowrap">
          <Link
            href="#cultural-events"
            className="block group flex-shrink-0"
            aria-label="Cultural Events"
          >
            <div className="relative w-full sm:w-[300px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[430px] overflow-hidden rounded-2xl">
              <Image
                src={bir}
                alt="Cultural celebration on campus"
                width={400}
                height={430}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#academic-life"
            className="block group flex-shrink-0"
            aria-label="Academic Life"
          >
            <div className="relative w-full sm:w-[300px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[430px] overflow-hidden rounded-2xl">
              <Image
                src={ikki}
                alt="Faculty exhibition"
                width={400}
                height={430}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#outdoor-activities"
            className="block group flex-shrink-0"
            aria-label="Outdoor Activities"
          >
            <div className="relative w-full sm:w-[300px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[430px] overflow-hidden rounded-2xl">
              <Image
                src={uch}
                alt="Group gathering outside"
                width={400}
                height={430}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#indoor-sessions"
            className="block group flex-shrink-0"
            aria-label="Indoor Sessions"
          >
            <div className="relative w-full sm:w-[300px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[430px] overflow-hidden rounded-2xl">
              <Image
                src={tort}
                alt="Indoor academic session"
                width={400}
                height={430}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
