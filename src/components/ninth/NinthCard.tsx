import { Box, Typography } from "@mui/material";

const NinthCard = (props: { questionText: string; answerText: string }) => {
    return (
        <Box sx={{borderRadius: 1, border: '1px solid #FEF0F6', }}>
            {/* アコーディオン上部 */}
            <Box sx={{px: 2, py: 5/2, display: 'flex', alignItems: 'center', backgroundColor: '#FEF0F6'}}>
                <Box
                sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",      // 円形
                    backgroundColor: '#FFFFFF',
                    display: "flex",
                    alignItems: "center",     // 縦方向中央
                    justifyContent: "center", // 横方向中央
                    textAlign: "center",
                }}
                >
                <Typography
                    sx={{
                    fontSize: 10,    // サイズに応じて調整
                    fontWeight: 700,
                    color: '#FEF0F6',
                    lineHeight: 1,          // 垂直ずれ防止[web:55]
                    }}
                >
                    Q
                </Typography>
                </Box>
                <Typography sx={{pl: 2, fontWeight: 700, fontSize: 14}}>
                    {props.questionText}
                </Typography>
            </Box>
            {/* アコーディオン下部 */}
            <Box sx={{px: 2, py: 5/2, display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                <Box
                sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",      // 円形
                    backgroundColor: '#FEF0F6',
                    display: "flex",
                    alignItems: "center",     // 縦方向中央
                    justifyContent: "center", // 横方向中央
                    textAlign: "center",
                }}
                >
                <Typography
                    sx={{
                    fontSize: 10,    // サイズに応じて調整
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1,          // 垂直ずれ防止[web:55]
                    }}
                >
                    A
                </Typography>
                </Box>
                <Typography sx={{pl: 2, fontWeight: 500, fontSize: 12,  whiteSpace: 'pre-wrap' }}>
                    {props.answerText}
                </Typography>
            </Box>
        </Box>
    );
};

export default NinthCard;