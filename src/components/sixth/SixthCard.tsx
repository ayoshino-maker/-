import { Box, Typography } from "@mui/material"

type SixthCardProps = {
    description: string;
    circleText: string;
};

const SixthCard: React.FC<SixthCardProps> = ({description, circleText }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#FEFEFE', py: 1.5, px: 1.4, borderRadius: 3 }}>
            <Box
            sx={{
                borderRadius: '100%', // 完全な円形にする
                backgroundColor: '#FD527B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Typography
                sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    py: 1,
                    px: 1.2,
                    color: '#FFFFFF',
                    textAlign: 'center',
                }}
            >
                {circleText}
            </Typography>
        </Box>
            <Typography sx={{ ml: 1, fontSize: 14, fontWeight: 600, color: '#FD527B' }}>{description}</Typography>
        </Box>
    );
}

export default SixthCard;