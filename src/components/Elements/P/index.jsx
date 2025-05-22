import React from 'react';

const P = ({ text = "", limit = 150, ...props }) => {
  const truncatedText = text.slice(0, limit);
  const isTruncated = text.length > limit;

  return (
    <p {...props}>
      {truncatedText}
      {isTruncated && <span>...</span>}
    </p>
  );
}

export { P };