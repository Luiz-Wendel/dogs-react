import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function updateMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    updateMatch();

    window.addEventListener('resize', updateMatch);
    return () => {
      window.removeEventListener('resize', updateMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
