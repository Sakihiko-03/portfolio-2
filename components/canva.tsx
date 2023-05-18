import React from 'react';

const CanvaEmbed = () => {
  return (
    <div className="relative w-full pb-[56.25%] shadow-md overflow-hidden rounded-lg">
      <iframe
        loading="lazy"
        className="absolute top-0 w-full h-full border-none"
        src="https://www.canva.com/design/DAFf3SFlX0s/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default CanvaEmbed;
