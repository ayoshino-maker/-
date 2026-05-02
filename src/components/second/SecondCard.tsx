import { Stack, Typography, Box } from "@mui/material";

type Props = {
    tile: string;
    description: string;
    imagePath: string;
    imageWidthPercent?: number;
};
const SecondCard=(props: Props)=> {
    return (
        <Box sx={{px: 7/2}}className="second-section">
        <Stack spacing={1}>
            <Box sx={{ width: "100%", 
                    display: "flex", 
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#3448AC",
                }}
                >
                <Typography
                align="center"
                    sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    width: "fit-content"
                    }}
                >
                    {props.tile}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#DCF5FF',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={props.imagePath}
                    alt={props.tile}
                    style={{
                        width: props.imageWidthPercent ? `${props.imageWidthPercent}%` : 'auto',
                        height: 'auto',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
          <Typography sx={{ fontWeight: 600 , fontSize: '14px', textAlign: 'start'}}>
            {props.description}
          </Typography>
        </Stack>
      </Box>
    )
}
export default SecondCard;