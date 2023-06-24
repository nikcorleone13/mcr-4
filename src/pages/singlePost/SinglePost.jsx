import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import "../home/Home.css";
import { BiMessage } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SinglePost = () => {
  const data = useContext(DataContext);
  const { postId } = useParams();

  const findObj = Object.values(data).filter((postId) => postId === postId);
  console.log("found", findObj);
  return (
    <div>
      {findObj.map((item) => {
        return (
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
        );
      })}

      <Link to="/">
        <h1>Go to Home</h1>
      </Link>
    </div>
  );
};
