import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        About Repository Finder
      </h1>
      <p className="text-lg sm:text-xl mb-4">
        Welcome to Repository Finder, your go-to tool for searching repositories
        on GitHub!
      </p>
      <p className="text-lg sm:text-xl mb-4">
        Our mission is to provide a simple and efficient way for users to
        discover repositories based on their interests and needs.
      </p>
      <p className="text-lg sm:text-xl mb-4">
        Whether you're a developer looking for open-source projects to
        contribute to or a tech enthusiast exploring the latest trends,
        Repository Finder is here to help.
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">How it Works</h2>
      <p className="text-lg sm:text-xl mb-4">
        Simply enter your search query in the search bar, and Repository Finder
        will fetch relevant repositories from GitHub's vast collection.
      </p>
      <p className="text-lg sm:text-xl mb-8">
        You can filter the search results by various criteria such as
        programming language, stars, forks, and more, to find exactly what
        you're looking for.
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contribute</h2>
      <p className="text-lg sm:text-xl mb-4">
        Repository Finder is an open-source project itself, hosted on GitHub. If
        you're interested in contributing to its development or have any
        suggestions for improvement, feel free to check out our GitHub
        repository and get involved!
      </p>
    </div>
  );
};

export default About;
