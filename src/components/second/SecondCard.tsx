import { Stack, Typography, Box } from "@mui/material";

type Props = {
    tile: string;
    description: string;
    imagePath: string;
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
            <img src={props.imagePath} alt={props.tile} style={{ width: '100%', height: 'auto' }} />
          <Typography sx={{ fontWeight: 600 , fontSize: '14px', textAlign: 'start'}}>
            {props.description}
          </Typography>
        </Stack>
      </Box>
    )
}
export default SecondCard;