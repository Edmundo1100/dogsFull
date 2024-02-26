import React, { useEffect, useState } from "react";

export const useMedia = (media: any) => {
  const [match, setMatch] = useState<any>(null);

  useEffect(() => {
    function changeMatch() { 
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
