// src/components/eighth/EighthCard.tsx
import { Box, Typography } from "@mui/material";

type Props = {
  stepText: string;
  iconUrl: string;
  description: string;
  subDescription?: string;
};

const EighthCard = (props: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: "#EAF3FF",
        opacity: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: 'start',
        pl: 3,
        py: 2.5,
        flex: 1,
      }}
    >
      <Box
        sx={{
          borderRadius: 20,
          p: "4px 8px",
          backgroundColor: "#3448AC",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 10,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {props.stepText}
        </Typography>
      </Box>

      <img
        src={props.iconUrl}
        alt="icon"
        style={{ paddingLeft: "24px", width: 30, height: 30 }}
      />

      <Box
        sx={{
          pl: 1,
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "#3448AC", fontSize: 14, fontWeight: 600 }}
        >
          {props.description}
        </Typography>
        {props.subDescription && (
          <Typography
            sx={{ color: "#3448AC", fontSize: 9, fontWeight: 600 }}
          >
            {props.subDescription}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default EighthCard;
