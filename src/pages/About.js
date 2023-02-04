import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        This project is a react application developed that makes requests to the github API with the
        functionality of finding repositories, formulating useful information to
        the user in a clean interface. We managed to get data like the name of
        the repository, official link, issues, etc .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Made By : &nbsp;
        <a className="text-white" href="https://www.linkedin.com/in/saurabh-pandey-b62185197/">
          Saurabh Pandey
        </a>
      </p>
    </div>
  );
};

export default About;
