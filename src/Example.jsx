import React, { useState } from 'react';

const ReadMoreExample = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = "Yeh ek lambi description hai jo aapko dikhai ja rahi hai. Isme bohot saari information hai.";

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className='border w-[250px]'>
        {isExpanded ? description : `${description.substring(0, 20)}...`}
        {description.length > 20 && (
          <button onClick={toggleDescription} className="text-blue-500 ml-1">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ReadMoreExample;