import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 bg-gray-100 max-w-full">
      <div className="max-w-screen-2xl mx-auto pt-10">
        <div className="flex flex-row space-x-40">
          <div className="flex flex-col w-96 items-start px-10">
            <div className="flex items-center space-x-2">
              <Image
                width={40}
                height={40}
                src={'./hero-logo.svg'}
                alt={'Hero logo'}
              />
              <Link className="font-bold" href={'/'}>
                EduPress
              </Link>
            </div>

            <p className="pt-4 text-gray-600 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="space-y-2">
            <h4>GET HELP</h4>
            <div className="flex flex-col space-y-2">
              <Link className="text-gray-700 font-normal" href={'/'}>
                Contact Us
              </Link>

              <Link className="text-gray-700 font-normal" href={'/'}>
                Latest Articles
              </Link>
              <Link className="text-gray-700 font-normal" href={'/'}>
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <h4>PROGRAMS</h4>
            <div className="flex flex-col space-y-2">
              <Link className="text-gray-700 font-normal" href={'/'}>
                Art & Design
              </Link>

              <Link className="text-gray-700 font-normal" href={'/'}>
                Business
              </Link>
              <Link className="text-gray-700 font-normal" href={'/'}>
                IT & Software
              </Link>
              <Link className="text-gray-700 font-normal" href={'/'}>
                Languages
              </Link>
              <Link className="text-gray-700 font-normal" href={'/'}>
                Programming
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <h4>CONTACT US</h4>
            <div className="flex flex-col  space-y-2">
              <Link className="text-gray-700 font-normal" href={'/'}>
                Contact Us
              </Link>

              <p className="text-gray-700 font-normal">
                Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
              </p>
              <p className="text-gray-700 font-normal">
                Tel: + (123) 2500-567-8988
              </p>
              <p className="text-gray-700 font-normal">
                Mail: supportlms@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <h2 className="text-gray-600">
            Copyright © 2024 LearnPress LMS | Powered by ThimPress
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
