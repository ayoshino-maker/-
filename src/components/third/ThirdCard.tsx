import { Container, Box, Typography } from "@mui/material";

type Props = {
    description: string;
};

const ThirdCard = (props: Props) => {
    return (
        <Container 
            className="third-section"
            sx={{ 
                p: '8px 24px', // padding-top/bottom: 8px, padding-left/right: 24px
                borderRadius: { 
                    xs: '20px 8px 20px 8px', // border-top-left: 20px, top-right: 8px, bottom-right: 20px, bottom-left: 8px
                },
                border: '1px dashed #F9C7BE',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1,
            }}
        >
            <Box
                sx={{
                    // width: 266,
                    // height: 36,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: '"Noto Sans JP", sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '128%', // 128% line-height
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: '#FD527B',
                        backgroundColor: '#FD527B',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        // width: '100%',
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'pre-wrap', // 改行を有効にする
                    }}
                >
                    {props.description}
                </Typography>
            </Box>
        </Container>
    );
};

export default ThirdCard;
