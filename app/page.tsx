"use client"
import ParticlesComponent from "@/components/particles";
import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';




export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    const teamMembers = [
        {
            name: 'Yeng Sokroza',
            image: '/our-team/roza-image.png',
            role: 'Team Leader of ISTAD LMS',
            facebook: 'https://www.facebook.com/chori.chan',
            github: 'https://github.com/YengSokroza'
        },
        {
            name: 'Chan Samangrathana',
            image: '/our-team/rathana-image.png',
            role: 'Front-end',
            facebook: 'https://www.facebook.com/mario.koza.16',
            github: 'https://github.com/chansamangrathana'
        },
        {
            name: 'Noun Sovanthorn',
            image: '/our-team/vanthorn-image.png',
            role: 'Front-end &  Documentation',
            facebook: 'https://www.facebook.com/noun.sovannthon',
            github: 'https://github.com/sovanthorn'
        },
        {
            name: 'Pov Soknem',
            image: '/our-team/soknem-image.png',
            role: 'Team Leader of Back-end',
            facebook: 'https://www.facebook.com/pov.soknem',
            github: 'https://github.com/soknem'
        },
        {
            name: 'Long Piseth',
            image: '/our-team/piseth-image.png',
            role: 'Back-end',
            facebook: 'https://www.facebook.com/long.piseth.792',
            github: 'https://github.com/Long2Seth'
        },
        {
            name: 'Sanh Panha',
            image: '/our-team/panha-image.png',
            role: 'Front-end',
            facebook: 'https://www.facebook.com/panha.sanh.5',
            github: 'https://github.com/SanhPanha'
        },
        {
            name: 'Nuth ChanReaksa',
            image: '/our-team/reaksa-image.png',
            role: 'Back-end',
            facebook: 'https://www.facebook.com/profile.php?id=100024599676295',
            github: 'https://github.com/NuthChanReaksa'
        },
    ];

  return (
      <div className="App relative">

          {/* Particles background */}
          <ParticlesComponent
              id="particles"
              className="absolute top-0 left-0 w-full h-full z-0"
          />

          <section className="py-8 px-5 mx-auto max-w-screen-xl text-center lg:py-16 xl:px-0 relative z-10">

              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                  <h2
                      data-aos="fade-up"
                      className="mb-4 text-3xl text-black-800 tracking-tight font-medium ">
                      Our LMS Members
                  </h2>
              </div>
              <div className="flex justify-center mx-auto mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      {teamMembers.slice(0, 3).map((member, index) => (
                          <div key={index} className="text-center text-black-800 ">
                              <Image
                                  alt={`${member.name} Avatar`}
                                  loading="lazy"
                                  width={144}
                                  height={144}
                                  data-aos="flip-right"
                                  decoding="async"
                                  className="mx-auto mb-4 w-24 h-24 lg:w-36 lg:h-36 rounded-full md:w-28 md:h-28 border-4 border-sky-500"
                                  src={member.image}
                              />
                              <h3
                                  data-aos="fade-up-right"
                                  className="mb-1 lg:text-2xl md:text-lg text-base text-black font-light tracking-tight ">
                                  {member.name}
                              </h3>
                              <small><p data-aos="fade-up">LMS TEAM</p></small>
                              <div data-aos="fade-down-right" className="flex justify-center">
                                <span
                                    className="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300 rounded p-1 text-xs w-fit uppercase">
                                    <span>{member.role}</span>
                                </span>
                              </div>
                              <ul data-aos="flip-left" className="flex justify-center mt-4 space-x-4">
                                  <li>
                                      <Link href={member.facebook} target="_blank"
                                            className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                               aria-hidden="true">
                                              <path fillRule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clipRule="evenodd"></path>
                                          </svg>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link href={member.github} target="_blank"
                                            className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                               aria-hidden="true">
                                              <path fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"></path>
                                          </svg>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {teamMembers.slice(3).map((member, index) => (
                      <div key={index + 3} className="text-center text-black-800">
                          <Image
                              alt={`${member.name} Avatar`}
                              loading="lazy"
                              width={144}
                              height={144}
                              data-aos="flip-right"
                              decoding="async"
                              className="mx-auto mb-4 w-24 h-24 lg:w-36 lg:h-36 rounded-full md:w-28 md:h-28 border-4 border-sky-500"
                              src={member.image}
                          />
                          <h3
                              data-aos="fade-up-right"
                              className="mb-1 lg:text-2xl md:text-lg text-base text-black font-light tracking-tight ">
                              {member.name}
                          </h3>
                          <small><p data-aos="fade-up">LMS TEAM</p></small>
                          <div data-aos="fade-down-right" className="flex justify-center">
                            <span
                                className="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300 rounded p-1 text-xs w-fit uppercase">
                                <span>{member.role}  </span>
                            </span>
                          </div>
                          <ul
                              data-aos="flip-left"
                              className="flex justify-center mt-4 space-x-4">
                              <li>
                                  <Link href={member.facebook} target="_blank"
                                        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                           aria-hidden="true">
                                          <path fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"></path>
                                      </svg>
                                  </Link>
                              </li>
                              <li>
                                  <Link href={member.github} target="_blank"
                                        className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                           aria-hidden="true">
                                          <path fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"></path>
                                      </svg>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  ))}
              </div>

          </section>
      </div>
  );
}
