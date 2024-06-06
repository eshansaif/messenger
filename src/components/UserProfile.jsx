import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 border-b border-gray-300">
      <img
        // src={user.avatar}
        src="https://shanjeed-saif.netlify.app/eshan_portfolio.png"
        alt={user.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="font-bold text-lg">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.status}</p>
      </div>
    </div>
  );
};

export default UserProfile;
