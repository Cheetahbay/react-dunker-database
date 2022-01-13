import React from "react";
import Image from "react-bootstrap/Image";
import Avatar from "@mui/material/Avatar";

const ListCard = ({ name, avatar, league, location, fetchDunker }) => {
  ListCard.defaultProps = {
    name: "Chi",
    league: "MindYaOwn",
    location: "Gotham",
  };
  const aviSize = {
    height: 75,
    width: 75,
  };
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <a href="#" value={name}>
                <Avatar
                  src={avatar}
                  alt={avatar}
                  sx={aviSize}
                  variant="square"
                />
              </a>
              <button
                className="btn btn-primary"
                onClick={(e) => fetchDunker(e.currentTarget.textContent)}
              >
                {name}
              </button>
            </div>
            <div className="col-11">
              <h6>{name}</h6>
              <h6>{league}</h6>
              <h6 className="mb-0">{location}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
