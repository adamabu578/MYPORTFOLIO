import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioCards() {
  return (
    <section id='projects'>
    <div className=" bg-black py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-[8vw] md:text-[6vw] font-bold text-center text-gray-700 mb-20">MY PROJECTS</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "SMATPAY WEB APP",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/smat-pay.png",
            description: "A fintech App which allow users to buy Data,airtime,TV subscription,pay bills online.",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://smatpay.vercel.app/"
          },
          {
            name: "INTERSWITCH BOOK LIBRARY WEB APP",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/switch.png",
            description: "An App which allow users to search any kind of books,users can sort books",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://interswitch-book-registry.vercel.app/book"
          },
          {
            name: "SASOM ACADEMY",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/sasom.png",
            description: "Sasom is a software development company",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://sasom-academy.vercel.app/"
          },
          {
            name: "PORTFOLIO WEBSITE",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/portfolio.png",
            description: "React is a library for building user interfaces.",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://adamabu578.github.io/Landing-page/"
          },
          {
            name: "BRIVAS WEB APP",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/signup.png",
            description: "Bulk SMS Resellers platform.",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "#"
          },
          {
            name: "FEDORA HERALD WEBSITE",
            color: "bg-[#61DAFB]/10",
            textColor: "text-[#764ABC]",
            icon: "/assets/fedora.png",
            description: "Human resources and business consulting website.",
            tools: "React.js, JavaScript, Tailwind CSS",
            link: "https://fedora-mockup.vercel.app/"
          }
        ].map((skill) => (
          <div
            key={skill.name}
            className={`relative ${skill.color} rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105`}
          >
            {/* Cover Image */}
            <div className="w-full h-40 relative overflow-hidden rounded-t-lg">
              <Image
                src={skill.icon}
                alt={skill.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="p-4 flex flex-col items-center text-center">
              <span className={`${skill.textColor} font-medium text-xl`}>{skill.name}</span>
              <p className="text-gray-700 text-sm mt-2 font-palatino">{skill.description}</p>
              {/* Tools Used */}
              <p className="text-gray-700 text-sm mt-4">{skill.tools}</p>
              {/* Button with Arrow Icon */}
              <a
                href={skill.link}
                className="mt-4 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-opacity-70 transition"
              >
               
                Visit Portfolio
                <span className="material-icons"><ArrowUpRight /></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
