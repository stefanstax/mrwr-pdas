import React from "react";
const ProfileCard = ({ title, handle, image, description }) => {
  return (
    <div className="card column">
      <div className="card-image">
        <figure className="image is-128x128 mx-auto">
          <img width="200px" height="200px" src={image} alt="" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title || "No title"}</p>
          <p class="subtitle is-6">{handle ? `@${handle}` : "No handle"}</p>
        </div>
        <div className="content mt-4">
          <p className="">{description || "No description"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
