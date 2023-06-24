import React, { useState } from "react";
import "./postcard.css";

import { BiMessage } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PostCard = ({ username, posts, picUrl }) => {
  const [post1, post2] = [...posts];
  console.log("posts", post1, post2);
  const [upvotes, SetUpvotes] = useState();

  const handleClick = () => {
    const path = "/posts/postId";
    Navigate("path");
  };
  return (
    <div>
      {posts.map((item) => {
        return (
          <Link to={`/posts/${item.postId}`}>
            <div className="card" onClick={() => handleClick()}>
              <div className="upvote-section">
                <BiUpvote />
                <BiDownvote />
                <p>{item.downvotes}</p>
              </div>
              <div className="user-info">
                <img src={item.picUrl} />
                <p>by {item.username}</p>
              </div>
              <div className="post-info">
                <div className="post-header">
                  {" "}
                  <h1>{item.post}</h1>
                </div>
                <div className="post-tags">
                  {item.tags.map((item) => {
                    return (
                      <>
                        <h4>{item}</h4>
                      </>
                    );
                  })}
                </div>
                <div className="post-description">
                  <p>{item.postDescription}</p>
                </div>
              </div>
              <div className="share-info">
                <div>
                  <BiMessage />
                </div>
                <div>
                  <BiShareAlt />
                </div>
                <div>
                  <FaRegBookmark />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
