import React from "react";
import { Box, Typography } from "@mui/material";
import lineIconLarge from "../../../assets/img/lineIconLarge.svg";
import heroNurse1 from "../../../assets/img/heroNurse1.png";
import heroNurse2 from "../../../assets/img/heroNurse2.png";

const LINE_URL = "https://lin.ee/QuLYzOh";

type LineCtaBlockProps = {
  ref?: React.Ref<HTMLAnchorElement>;
};

const LineCtaBlock = ({ ref }: LineCtaBlockProps) => {
  return (
    <Box sx={{ position: "relative", width: 300, right: 25 }}>
      {/* 緑LINE CTA ボタン (主軸) */}
      <Box
        ref={ref}
        component="a"
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: "#289E4B",
          boxShadow: "0 4px 0 #157815",
          borderRadius: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          px: "24px",
          py: "8px",
          textDecoration: "none",
          cursor: "pointer",
          zIndex: 1,
          "&:hover": { backgroundColor: "#22853f" },
        }}
      >
        <Box component="img" src={lineIconLarge} alt="" sx={{ width: 36, height: 36 }} />
        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF", lineHeight: 1.46 }}>
          LINEで専任アドバイザーに相談
        </Typography>
      </Box>

      {/* 黄色吹き出しタグ (緑CTAの前面・上端にせり出す) */}
      <Box
        sx={{
          position: "absolute",
          left: "calc(50% - 30.5px)",
          top: -18,
          transform: "translateX(-50%)",
          backgroundColor: "#F9F396",
          border: "2px solid #FFF344",
          borderRadius: "6px",
          boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
          px: "8px",
          py: "4px",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: 12, color: "#303030", lineHeight: 1.46, whiteSpace: "nowrap" }}
        >
          無料でスマホで相談OK!
        </Typography>
      </Box>

      {/* 男性画像 (ボタン右上にせり出す) */}
      <Box
        component="img"
        src={heroNurse1}
        alt=""
        sx={{
          position: "absolute",
          left: 192.5,
          top: -74,
          width: 92,
          height: 89,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* 利用満足度No.1 バッジ (男性画像の右奥) */}
      <Box
        component="img"
        src={heroNurse2}
        alt=""
        sx={{
          position: "absolute",
          left: 257.5,
          top: -54,
          width: 72,
          height: 72,
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default LineCtaBlock;
