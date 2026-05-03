import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LineCtaBlock from "./LineCtaBlock";

type StickyLineCtaProps = {
  observeRef: React.RefObject<HTMLElement | null>;
};

const StickyLineCta = ({ observeRef }: StickyLineCtaProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = observeRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [observeRef]);

  return (
    <Box
      aria-hidden={!visible}
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      <LineCtaBlock />
    </Box>
  );
};

export default StickyLineCta;
