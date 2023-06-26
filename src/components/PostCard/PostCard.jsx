import "./PostCard.css";
import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import PickerData from "@emoji-mart/data";

import { GoDotFill } from "react-icons/go";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  BsThreeDots,
  BsDot,
  BsFillHeartFill,
  BsChat,
  BsSend,
  BsEmojiSmile,
} from "react-icons/bs";

const PostCard = ({
  profileIMG,
  name,
  username,
  location,
  description,
  post_image,
  likesCount,
  commentsCount,
}) => {
  const [currSlide, setCurrSlide] = useState({
    next: true,
    prev: false,
    index: 0,
  });
  const slideNext = () =>
    setCurrSlide(() => {
      return {
        prev: true,
        index: currSlide.index + 1,
        next: currSlide.index + 1 !== post_image.length - 1,
      };
    });
  const slidePrev = () =>
    setCurrSlide((index) => {
      return {
        next: true,
        index: currSlide.index - 1,
        prev: currSlide.index - 1 !== 0,
      };
    });

  const [data, setData] = useState({ liked: false, comment: "" });
  const [pickerVisible, setPickerVisiblity] = useState(false);
  const submit = () => console.log(data.comment);

  return (
    <div className="instgram-post mb-4">
      <div className="igpost-header mb-1">
        <div className="left-header">
          <div>
            <img src={profileIMG} alt="user_profile" />
          </div>
          <div>
            <div>
              <h5>{name}</h5>
              <BsDot />
              <span>21h</span>
            </div>
            <h6>{location}</h6>
          </div>
        </div>
        <div className="right-header">
          <div className="dropdown">
            <i
              id="options-dropdown-menu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsThreeDots />
            </i>
            <ul
              className="dropdown-menu"
              aria-labelledby="options-dropdown-menu"
            >
              <li>Details</li>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="igpost-body mb-1">
        <img src={post_image[currSlide.index]} alt="post_image" />
        {post_image.length > 1 && (
          <>
            {currSlide.prev && (
              <span className="swap-left">
                <AiFillLeftCircle onClick={slidePrev} />
              </span>
            )}
            {currSlide.next && (
              <span className="swap-right">
                <AiFillRightCircle onClick={slideNext} />
              </span>
            )}
            <div className="swap">
              {post_image.map((element, index) => (
                <span key={index}>
                  <GoDotFill
                    className={currSlide.index === index ? "fs-5" : ""}
                  />
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="igpost-footer">
        <div className="igpf-upper mb-1">
          <div>
            {data.liked ? (
              <i
                className="heartFill"
                onClick={() => setData({ ...data, liked: !data.liked })}
              >
                <BsFillHeartFill />
              </i>
            ) : (
              <i
                className="heartOut"
                onClick={() => setData({ ...data, liked: !data.liked })}
              >
                <FaRegHeart />
              </i>
            )}
            <i className="comment">
              <BsChat />
            </i>
            <i className="share">
              <BsSend />
            </i>
          </div>
          <div>
            <i className="bookmark">
              <FaRegBookmark />
            </i>
          </div>
        </div>
        <div className="igpf-lower">
          <div>
            <p>{likesCount} likes</p>
            <div>
              <strong>{username}</strong> {description}
            </div>
          </div>
          <div>View all {commentsCount} comments</div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a comment..."
              value={data.comment}
              onChange={(e) => setData({ ...data, comment: e.target.value })}
            />
            {data.comment.length !== 0 && (
              <p>
                <strong onClick={() => submit()}>Post</strong>
              </p>
            )}
            <i>
              <BsEmojiSmile
                onClick={() => setPickerVisiblity(!pickerVisible)}
              />
              {pickerVisible && (
                <Picker
                  data={PickerData}
                  onEmojiSelect={(e) =>
                    setData({ ...data, comment: data.comment + e.native })
                  }
                />
              )}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
