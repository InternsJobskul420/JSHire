import React from 'react';

function CopyLinkComponent({ link }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        console.log('Link copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
      });
  };

  console.log(link);

  return (
    <div  onClick={handleCopyLink}>
      Copy Link
    </div>
  );
}

export default CopyLinkComponent;