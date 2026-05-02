import { Box, Button, Typography } from "@mui/material";
import iconsLine from "../../../assets/img/iconsLine.png"


type CustomButtonVariant = 'smallest' |'small' | 'large';

type CustomButtonProps = {
    variant?: CustomButtonVariant;
}

const CustomButton = ({variant = 'small',
  ...props}: CustomButtonProps) => {
      const isSmall = variant === 'small';
      const isSmallest = variant === 'smallest'

      const lineUrl = "https://lin.ee/QuLYzOh";

        const handleLineOpen = () => {
            
            // アプリ起動→失敗時はWeb版
            window.open(lineUrl, "_blank");
            
            // フォールバック（3秒後にWeb版確認）
            setTimeout(() => {
            window.open(lineUrl, "_blank");
            }, 1000);
        };

    return (
        <Button
        {...props}
        onClick={handleLineOpen}
        sx={{
            py: isSmall ? 1 : isSmallest ? 2 : 3,
            borderRadius: isSmall ? 1/2 :isSmallest ? 1 : 4,
            padding: isSmall ? '8px 44px' : isSmallest ?  '4px 12px' : '16px 44px',
            backgroundColor: '#FF295DCC',
            opacity: 1,
            transform: 'rotate(0deg)',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '14px',
            color: '#FFFFFF',
            '&:hover': {
            backgroundColor: '#FF295DCC',
            }
        }}
        >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={iconsLine} alt="Line Icon" style={{ width: 24, height: 24}} />
            <Typography sx={{ ml: 1, fontSize: variant === 'smallest' ? 10 : 16, fontWeight: 700, color: '#FFFFFF' }}>無料で相談してみる</Typography>
        </Box>
        </Button>
    );
};

export default CustomButton;