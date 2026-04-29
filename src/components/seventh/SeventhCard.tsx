import { Box, Divider, Stack, Typography } from "@mui/material";

type SeventhCardProps = {
    circleImageUrl: string;
    jobTitle: string;
    jobDescription: string;
};

const SeventhCard = (props: SeventhCardProps) => {
    return (
        <Box
            sx={{
                borderRadius: 5/2, // border-radius: 20px
                backgroundColor: '#FFFFFF', // background: #FFFFFF
                border: '1px solid #F9C7BE', // border: 1px solid #F9C7BE
                boxShadow: '6px 6px 0px 0px #FFF7F6', // box-shadow: 6px 6px 0px 0px #FFF7F6
                opacity: 1,
                display: 'flex', // gapを使うために必要
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <Box sx={{ width: '100%',height: 16, backgroundColor: '#F9C7BE', borderTopLeftRadius: 8,borderTopRightRadius: 8,borderBottomLeftRadius: 0,borderBottomRightRadius: 0,}} />
            <Box sx={{ width: '100%',  pb: 3, pt: 3/2,  }}>
                <Stack spacing={2} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                    component="img"
                    src={props.circleImageUrl}
                    alt="円形画像"
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%", // 円形にする
                        objectFit: "cover",  // 画像をトリミングしてフィット
                    }}
                    />
                    <Typography variant="body2" fontWeight="bold" color="#FD527B" textAlign="center" sx={{ fontSize: 14, whiteSpace: 'pre-wrap' }}>
                        {props.jobTitle}
                    </Typography>
                    <Divider
                        sx={{
                            width: '66%',
                            mx: 8,
                            height: 1,
                            border: '1px dashed #F9C7BE', 
                            opacity: 1,
                            transform: 'rotate(0deg)',
                        }}
                    />
                    <Typography color="#303030"  sx={{ fontSize: 14, whiteSpace: 'pre-wrap' ,fontWeight: 600}}>
                        {props.jobDescription}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default SeventhCard;