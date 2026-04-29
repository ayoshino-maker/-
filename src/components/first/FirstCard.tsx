import { Box, Typography } from "@mui/material"
import React from "react";

type Props = {
    firstSmTitle?: string;
    mdTitle: string;
    smTitle: string;
};

const FirstCard = (props: Props) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", background: "linear-gradient(270deg, #FFFFFF 0%, #EEEEEE 100%)", boxShadow: "0px 4px 0px 0px #FFFFFF",whiteSpace: 'pre-line', height: '101px', px: 1,borderRadius: 1.5}}>
            <Typography  fontWeight={1000} fontSize={16} color="#3448AC" sx={{lineHeight: 0.1}}>
                <Typography component="span" fontWeight={1000} fontSize={12} color="#3448AC">
                    {props.firstSmTitle}
                </Typography>
                {props.mdTitle}
                <Typography component="span" fontWeight={1000} fontSize={12} color="#3448AC">
                    {props.smTitle}
                </Typography>
            </Typography>
        </Box>
    )
}

export default FirstCard