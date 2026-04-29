import { Box, Typography } from "@mui/material";

const Footer=()=> {
    return (
        <Box component="footer" sx={{ py: 5/2, backgroundColor: '#464646', }}>
            <Typography sx={{ color: '#FFFFFF', textAlign: 'center' , fontWeight: 600, fontSize: 12}}>© 2026 ちば看護 All Rights Reserved.</Typography>
        </Box>
    )
}

export default Footer;