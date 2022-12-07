import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaMousePointer,
  FaRegAddressCard,
} from 'react-icons/fa';

const Header = (props) => {
  const { details } = props;
  return (
    <header>
      <div className="bg-cyan-800 text-white flex flex-col justify-center items-center p-2">
        <h1 className="text-2xl font-bold">{details.personal.name}</h1>
        <h2 className="text-base font-style: italic">
          {details.personal.role}
        </h2>
        <ul className="inline-grid grid-cols-3 gap-2 text-sm mt-2">
          {details.personal.email && (
            <li className="flex gap-2 justify-center items-center break-all">
              <FaEnvelope />
              {details.personal.email}
            </li>
          )}
          {details.personal.phone && (
            <li className="flex gap-2 justify-center items-center break-all">
              <FaPhone />
              {details.personal.phone}
            </li>
          )}
          {details.personal.location && (
            <li className="flex gap-2 justify-center items-center break-all">
              <FaMapMarkerAlt />
              {details.personal.location}
            </li>
          )}
          {details.personal.github && (
            <li className="flex gap-2 justify-center items-center break-all">
              <FaGithub />
              {details.personal.github}
            </li>
          )}
          {details.personal.site && (
            <li className="flex gap-2 justify-center items-center break-all">
              <FaMousePointer />
              {details.personal.site}
            </li>
          )}
        </ul>
      </div>
      {details.personal.statement && (
        <div className="flex flex-col justify-center pl-4 mt-4 gap-2">
          <h3 className="flex items-center gap-2 font-bold">
            <FaRegAddressCard />
            Profile
          </h3>
          <p className="text-sm">{details.personal.statement}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
