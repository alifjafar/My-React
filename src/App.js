import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden mt-5">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="https://avatars2.githubusercontent.com/u/17380533?s=460&v=4"
            alt="Avatar"
          />
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Alif Jafar Fatkhurrohman</p>
              <p className="text-sm leading-tight text-grey-dark mt-2">
                Developer at Minjemin.com
              </p>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/alifjafar"
                target="_blank"
                className="no-underline text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
