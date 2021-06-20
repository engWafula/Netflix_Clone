import React from 'react';
import PropTypes from 'prop-types';

const ContentInfo = ({
  title, text, imgUrl, side,
}) => (
  <div
    className={`content_container_infos ${side}`}
  >
    <div className="content_text">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
    <div className="content_image_container">
      <img src={imgUrl} alt={title} />
    </div>
  </div>
);




ContentInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
};

export default ContentInfo;
