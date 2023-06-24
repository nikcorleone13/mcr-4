import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

import { FaHome } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { PostCard } from "../../components/PostCard";

export const Home = () => {
  const { forumData } = useContext(DataContext);
  const showData = forumData;
  console.log("Data rec", showData);

  const { accountId, username, name, picUrl, posts } = showData;
  return (
    <div className="main-div">
      <Navbar />

      <div className="home-main-div">
        <div className="links-section">
          <div className="links-div">
            <h1 className="side-links " id="home-icon">
              <FaHome /> Home
            </h1>
            <h1 className="side-links">
              <BsFillRocketFill /> Explore
            </h1>
            <h1 className="side-links">
              <FaBookmark /> Bookmarks
            </h1>
            <h1 className="side-links">
              <FaUserAlt /> User
            </h1>
          </div>

          <div className="profile-div">
            <div>
              <img src={picUrl}></img>
              <h3>@{username}</h3>
            </div>
          </div>
        </div>

        <div className="post-section">
          <h1>Latest Posts</h1>
          <PostCard username={username} posts={posts} picUrl={picUrl} />
        </div>

        <div className="filter-section">
          <select>
            <option value="most" onChange={() => handleSort()}>
              Most Upvoted
            </option>
            <option value="least" onChange={() => handleSort()}>
              Least Upvoted
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
