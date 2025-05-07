
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-portal-header py-6 px-4 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">📚</span>
          <h1 className="text-2xl font-bold">Exam Registration Portal</h1>
        </div>
        <nav className="mt-2">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-indigo-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-indigo-300 hover:text-white transition-colors">
                Exams
              </Link>
            </li>
            <li>
              <Link to="/" className="text-indigo-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
