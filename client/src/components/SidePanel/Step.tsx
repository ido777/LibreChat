import React, { useState, useEffect } from 'react';

const Step = ({ title, contentPath, direction }) => {
  const [showContent, setShowContent] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');

  const toggleContent = () => {
    if (!showContent && !htmlContent) {
      // Load content only once and only if not already loaded
      fetch(contentPath)
        .then((response) => response.text())
        .then((html) => {
          setHtmlContent(html);
        })
        .catch((error) => console.error('Failed to load step content', error));
    }
    setShowContent(!showContent);
  };

  return (
    <div
      dir={direction}
      style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid #eee' }}
    >
      <h4 onClick={toggleContent}>{title}</h4>
      {showContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </div>
  );
};

export default Step;
