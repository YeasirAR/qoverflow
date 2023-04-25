import React, { useState } from "react";

function ProfileEdit() {
  const [displayName, setDisplayName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const [about, setAbout] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };
  

  return (
    <div className="container mx-auto px-4 m-6">
      <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="displayName"
            className="block text-gray-700 font-bold mb-2"
          >
            Display Name
          </label>
          <input
            required
            type="text"
            id="displayName"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location
          </label>
          <input
            required
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="about" className="block text-gray-700 font-bold mb-2">
            About
          </label>
          <textarea
            required
            id="about"
            rows={3}
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex place-content-between">
          <div className="mb-6">
            <label htmlFor="facebook" className=" text-gray-700 font-bold mb-2">
              Facebook
            </label>
            <input
              type="text"
              id="facebook"
              value={facebook}
              onChange={(event) => setFacebook(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="twitter" className=" text-gray-700 font-bold mb-2">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              value={twitter}
              onChange={(event) => setTwitter(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="github" className="text-gray-700 font-bold mb-2">
              GitHub
            </label>
            <input
              type="text"
              id="github"
              value={github}
              onChange={(event) => setGithub(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="profilePic"
            className="block text-gray-700 font-bold mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            onChange={(event) => setProfilePic(event.target.files[0])}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Current Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new_password"
            className="block text-gray-700 font-bold mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            value={new_password}
            onChange={(event) => setNew_password(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;