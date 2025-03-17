import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5 sm:px-10">
      <div className=" justify-items-center max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg ">
   

        <div className="w-24 h-24 rounded-full overflow-hidden sm (640px) mb-4">
          <img src="Headshot.jpg" alt="Profile" />
        </div>



        <div className="justify-items-center text-center mb-8">
          <h1 className="text-4xl font-semibold">Darlene Wyatt</h1>
          <p className="text-lg text-gray-600 mt-2">
          I am a current college student at Arkansas Tech University studying information technology.
          I am certified to code in Python, C++, and HTML web programming. 
          I’ve done quite of work in graphic design. 
          I have a lot of skills with being able to work with others well, 
          and satisfy others needs in the work industry. With addition to loving nature, and animals!
          </p>
        </div>

  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 center">Education</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Arkansas Tech University— Information Technogoly</li>
          </ul>
        </div>



        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-lg">
            Email: <a href="mailto:Darlene.yovana@gmail.com" className="text-blue-500">Darlene.yovana@gmail.com</a>
          </p>

          <div className="mt-4">
            <a href="https://www.linkedin.com/in/darlene-wyatt-54b391255" className="text-blue-500 mr-4">LinkedIn        </a>
            <a href="https://github.com/Darla03/WebProgramming.git" className="text-blue-500" >  GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

