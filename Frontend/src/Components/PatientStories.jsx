// PatientStories.js
import React, { useState } from 'react';

const PatientStories = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const stories = [
    {
      title: "Underwent procedure for retinal detachment",
      content: "",
      hasVideo: true,
      name: "Luke Olfert",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      title: "Underwent Colonoscopy and Medical Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hasVideo: false,
      name: "Luke Olfert",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      title: "Successful Heart Surgery",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hasVideo: true,
      name: "Emma Thompson",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      title: "Knee Replacement Recovery",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      hasVideo: false,
      name: "John Doe",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        title: "Underwent procedure for retinal detachment",
        content: "",
        hasVideo: true,
        name: "Luke Olfert",
        location: "New York, USA",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        title: "Underwent Colonoscopy and Medical Management",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        hasVideo: false,
        name: "Luke Olfert",
        location: "Sydney, Australia",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
      }
  ];

  const storiesPerPage = 2;
  const pageCount = Math.ceil(stories.length / storiesPerPage);

  const displayedStories = stories.slice(
    currentPage * storiesPerPage,
    (currentPage + 1) * storiesPerPage
  );

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Patient Stories & Videos</h2>
      <div className="flex flex-wrap -mx-2">
        {displayedStories.map((story, index) => (
          <div key={index} className="w-full md:w-1/2 px-2 mb-4">
            <div className="border rounded-lg p-4 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
              {story.hasVideo ? (
                <div className="relative pb-16:9 mb-4 flex-grow">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 mb-4 flex-grow">{story.content}</p>
              )}
              <div className="flex items-center mt-auto">
                <img src={story.image} alt={story.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-gray-600">{story.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full mx-1 ${i === currentPage ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentPage(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PatientStories;