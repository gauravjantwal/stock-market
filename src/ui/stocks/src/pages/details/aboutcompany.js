import React, { useState } from "react";

function AboutCompany(props) {
  const OverView = props.OverView;
  const textlength = OverView?.Description?.length;
  const [Showmore, setshowmore] = useState(textlength > 350 ? true : false);

  return (
    <>
      {OverView?.Name && (
        <div>
          <h5 className="section-title mt-2 mb-2">About {OverView.Name}</h5>
          <div className=" mb-3">
            <div className="">
              <div
                className={
                  Showmore ? "card-text companydesc text" : "card-text  text"
                }
              >
                {OverView.Description}
              </div>
              {textlength > 350 && (
                <a
                  className="link-info text-color-green"
                  onClick={() => setshowmore(!Showmore)}
                >
                  {Showmore ? "Show More" : "Show Less"}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutCompany;
