import { Box, Stack, Typography } from "@mui/material";

const FifthCard: React.FC<{ title: string; imgUrl: string; firstDescription: string; secondDescription?: string}> = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
            <Stack spacing={1}>
            <Typography
                sx={{
                    width: '100%',
                    py: 1/2,
                    textAlign: 'center',
                    backgroundColor: '#EAF3FF',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#3448AC',
                    // padding: '8px 0',
                }}
            >
                {props.title}
            </Typography>
            <img src={String(props.imgUrl)} alt={props.title} style={{ width: '100%', height: '' }} />
            <Box>
                <Box sx={{display: 'flex', alignItems: 'flex-start', }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#000000',
                            whiteSpace: 'pre-wrap', 
                        }}
                    >・</Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#000000',
                            whiteSpace: 'pre-wrap', 
                        }}
                    >
                        {props.firstDescription}
                    </Typography>
                </Box>
                {props.secondDescription && (
                    <Box sx={{display: 'flex', alignItems: 'flex-start', }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#000000',
                            whiteSpace: 'pre-wrap', 
                        }}
                    >・</Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#000000',
                            whiteSpace: 'pre-wrap', 
                        }}
                    >
                        {props.secondDescription}
                    </Typography>
                </Box>
                )}
            </Box>
            </Stack>
        </Box>
    );
};

export default FifthCard;