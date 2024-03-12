import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        {/* profile img */}
        <div className="profile-pic">
          <img
            src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="profile-data">
          <h1>Patty</h1>
          <div className="profile-info" style={{ display: "flex" }}>
            <p>35 posts</p>
            <p>50 followers</p>
            <p>80 following</p>
          </div>
        </div>
      </div>
      <hr style={{width: "90%", margin: " 25px auto", opacity: "0.8"}}/>
      {/* gallery */}
      <div className="gallery">
        <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
         <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
         <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
         <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
         <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
         <img
          src="https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-a-man-with-glasses-and-a-sweater-on.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
}
