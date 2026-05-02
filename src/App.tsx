import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import secondSectionFirstImg from "./assets/img/location.svg";
import secondSectionSecondImg from "./assets/img/medicine.svg";
import secondSectionThirdImg from "./assets/img/sharing.svg";
import SecondCard from "./components/second/SecondCard";
import ThirdCard from "./components/third/ThirdCard";
import triangle from "./assets/img/triangle.png";
import fifthSectionImg from "./assets/img/fifthSectionFirstImg.png";
import fifthSectionSecondImg from './assets/img/fifthSectionSecondImg.png'
import fifthSectionThirdImg from './assets/img/fifthSectionThirdImg.png'
import seventhSectionFirstFaceImg from "./assets/img/seventhSectionFirstFaceImg.png";
import seventhSectionSecondFaceImg from "./assets/img/seventhSectionSecondFaceImg.png";
import freeRegister from "./assets/img/freeRegister.png";
import hearing from "./assets/img/hearing.png";
import introduceApplication from "./assets/img/introduceApplication.png";
import interview from "./assets/img/interview.png";
import huntedJob from "./assets/img/huntedJob.png";
import tenthSectionImg from "./assets/img/resume.svg";
import waveLine from "./assets/img/waveLine.png";
import handShake from "./assets/img/handShake.png";
import heroLogo from "./assets/img/heroLogo.png";
import heroBg from "./assets/img/heroBg.svg";
import heroMain from "./assets/img/heroMain.png";
import heroEdited from "./assets/img/heroEdited.png";
import heroPolaroid from "./assets/img/heroPolaroid.png";
import heroNurse1 from "./assets/img/heroNurse1.png";
import heroNurse2 from "./assets/img/heroNurse2.png";
import heroBadge from "./assets/img/heroBadge.png";
import semiEclipse from "./assets/img/semiEllipse.png";
import agreement from "./assets/img/agreement.svg";
import FifthCard from "./components/fifth/FifthCard";
import SixthCard from "./components/sixth/SixthCard";
import SeventhCard from "./components/seventh/SeventhCard";
import CustomButton from "./components/shared/buttons/CustomButton";
import EighthCard from "./components/eighth/EighthCard";
import NinthCard from "./components/ninth/NinthCard";
import Footer from "./components/shared/footer/Footer";

const App: React.FC = () => {
  return (
    <Box  sx={{ bgcolor: "#fafafa" , mx: 0, display: "flex",
        flexDirection: "column",      // 子を縦方向に並べる
        alignItems: "center",}}>
      {/* header */}
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          py: 1,
          backgroundColor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(4px)',
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-between',
        }}
      >
        <img src={heroLogo} alt="ちば看護" style={{ height: 17, padding: '0 12px' }} />
        <Box sx={{ px: 3/2 }}>
          <CustomButton variant="smallest" />
        </Box>
      </Container>
      {/* Hero (393px設計をsm幅(600px)で固定スケール) */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          aspectRatio: '393 / 700',
          containerType: 'inline-size',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          overflow: 'hidden',
        }}
      >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 393,
          height: 700,
          transformOrigin: 'top left',
          transform: 'scale(calc(100cqi / 393px))',
        }}
      >
        {/* 装飾画像 (背面レイヤー) */}
        <Box component="img" src={heroEdited} alt="" sx={{ position: 'absolute', left: 67, top: 30, width: 118, height: 141, zIndex: 0, pointerEvents: 'none' }} />

        {/* メインヒーロー画像 */}
        <Box component="img" src={heroMain} alt="ちば看護" sx={{ position: 'absolute', left: 0, top: 346, width: 393, height: 267, objectFit: 'cover', zIndex: 0 }} />

        {/* ポラロイド風カード */}
        <Box sx={{ position: 'absolute', left: 14, top: 496, width: 183, height: 122, transform: 'rotate(-3.1deg)', zIndex: 1, border: '4px solid #FFFFFF', boxShadow: '0 4px 4px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
          <Box component="img" src={heroPolaroid} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </Box>

        {/* 看護師写真 */}
        <Box component="img" src={heroNurse1} alt="" sx={{ position: 'absolute', left: 240, top: 585, width: 92, height: 89, zIndex: 1 }} />
        <Box component="img" src={heroNurse2} alt="" sx={{ position: 'absolute', left: 305, top: 605, width: 72, height: 72, zIndex: 2 }} />

        {/* 年収リボンバナー(下層) */}
        <Box
          sx={{
            position: 'absolute',
            left: -4,
            top: 194,
            width: 'auto',
            zIndex: 2,
            pointerEvents: 'none',
            transform: 'rotate(-4deg)',
            transformOrigin: 'left center',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FD527B',
              px: 2,
              py: '2px',
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '4px',
            }}
          >
            <Typography component="span" sx={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
              年収
            </Typography>
            <Typography component="span" sx={{ color: '#F8F07C', fontWeight: 900, fontSize: 26, fontFamily: 'Helvetica, sans-serif', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
              400
            </Typography>
            <Typography component="span" sx={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
              万円からの
            </Typography>
            <Typography component="span" sx={{ fontSize: 16, fontWeight: 700, color: '#F8F07C', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
              高給与
            </Typography>
            <Typography component="span" sx={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
              案件!
            </Typography>
          </Box>
        </Box>

        {/* 回転コールアウトカード(前面) */}
        <Box
          sx={{
            position: 'absolute',
            left: -18,
            top: 227,
            width: 429,
            height: 147,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              transform: 'rotate(-4deg)',
              width: 422,
              backgroundColor: '#FFFFFF',
              pt: '12px',
              pb: '34px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Typography sx={{ color: '#303030', fontWeight: 700, fontSize: 20, lineHeight: 1.46, whiteSpace: 'nowrap' }}>
              今の職場と同じ時間で、
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-block', mt: '4px' }}>
              <Typography
                sx={{
                  color: 'rgba(255,41,93,0.8)',
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: 1.46,
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                残業少なめ、ライフスタイル重視!
              </Typography>
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  bottom: 2,
                  left: 0,
                  right: 0,
                  height: '10px',
                  backgroundColor: 'rgba(248, 240, 124, 0.8)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </Box>
            <Typography sx={{ mt: '4px', color: '#303030', fontWeight: 700, fontSize: 24, lineHeight: 1.46, whiteSpace: 'nowrap' }}>
              <Box
                component="span"
                sx={{ color: 'rgba(255,41,93,0.8)', fontWeight: 900, fontSize: 28 }}
              >
                ちば看護
              </Box>
              で理想の職場へ!
            </Typography>
          </Box>
        </Box>

        {/* 千葉県密着実績 No.1 バッジ (最前面) */}
        <Box component="img" src={heroBadge} alt="千葉県密着実績 No.1" sx={{ position: 'absolute', left: 272, top: 128, width: 120, height: 120, zIndex: 4, pointerEvents: 'none' }} />
      </Box>
      </Box>

      {/* SecondSection */}
      <Container maxWidth="sm" sx={{ pt: 6, }}>
        <Stack spacing={0} alignItems="center">
          <Typography 
            fontWeight="bold" 
            sx={{ fontSize: '20px', fontWeight: 700, textAlign: "center",color: "#192C89", whiteSpace: 'pre-wrap', }}
          >
            ちば看護は千葉県に特化した<br/>
            看護師専門の転職エージェント
          </Typography>
          <Stack spacing={2} sx={{ py: 3 }}>
            <SecondCard 
              tile={"千葉県内に特化したエージェント"} 
              description={"千葉県に根ざした独自ネットワークで、病院、クリニック、介護施設、訪問看護など幅広い求\n人をご提案します。"}
              imagePath={secondSectionFirstImg}
            />
            <SecondCard 
              tile={"地域事情・職場内の雰囲気までご提案"} 
              description={"各施設の雰囲気や人間関係、忙しさなど、求人票では分からない内部情報までお伝えします。"} 
              imagePath={secondSectionSecondImg}
            />
            <SecondCard 
              tile={"応募から入職後まで一貫サポート"} 
              description={"面談・書類添削・条件交渉から入職後の悩み相談まで、千葉在住の担当が継続して支援します。"} 
              imagePath={secondSectionThirdImg}
            />
            </Stack>
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <CustomButton/>
        </Box>
      </Container>

      {/* ThirdSection */}
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Stack spacing={2} alignItems="center">
          <Box sx={{ 
            backgroundColor: '#EAF3FF', 
            py: 3, 
            px: 2, 
            width: '100%', 
            borderRadius: 2 
          }}>
            <Typography 
              fontWeight="bold" 
              sx={{ fontSize: '20px', textAlign: "center", pb: 3 , color: "#192C89"}}
            >
              こんなお悩みありませんか？
            </Typography>
            <Stack spacing={1} sx={{ px: 2 }}>
              <ThirdCard description={"千葉で転職したいけど、\nどの求人がいいか分からない"} />
              <ThirdCard description={"エージェントに登録したら、\nしつこく電話がきそうで不安"} />
              <ThirdCard description={"都内勤務と千葉勤務、\nどちらが自分に合うのか分からない"} />
              <ThirdCard description={"人間関係や職場の雰囲気など、\n求人票に書いていない情報が知りたい"} />
            </Stack>
          </Box>
        </Stack>
         <Box sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img 
              src={triangle} 
              alt="Triangle" 
              style={{ height: 'auto', width: '29%', display: 'block' }} 
            />
          </Box>
      </Container>

      {/* forthSection */}

      <Container maxWidth="sm" sx={{ px: {xs: 0},pt: 5 , display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box component="span"  sx={{py: 1, px: 4,      width: "fit-content", height: "fit-content", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', backgroundColor: '#604045'}}>
          <Typography sx={{fontSize: 14, fontWeight: 600, color: '#FFFFFF', textAlign: 'center', letterSpacing: '4.2px' }}>
            その転職のお悩み
          </Typography>
        </Box>
        <Typography fontWeight={700} fontSize={18.5} color="#192C89" sx={{textAlign: 'center', py: 3, whiteSpace: 'pre-wrap'}}>
          千葉県特化
          <Typography component="span" fontWeight={700} fontSize={14} color="#192C89">
            の
          </Typography>
          看護師転職エージェント<br/>
          <Typography component="span" fontWeight={700} fontSize={14} color="#192C89">
            だからこそ
          </Typography>
          解決
          <Typography component="span" fontWeight={700} fontSize={14} color="#192C89">
            できます
          </Typography>
          </Typography>
        <Box
          sx={{
            position: 'relative',     // 子のabsolute配置の基準
            width: '100%',
          }}
        >
        {/* 既存の画像（背景的な扱い） */}
        <img
          src={waveLine}
          alt="Wave Line"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />

        <Box
          component="img"
          src={handShake}            // 例: import newImage from '...';
          alt="Hand Shake"
          sx={{
            position: 'absolute',
            width: 64,
            left: '50%',            // 水平方向中央の基準
            bottom: 32,             // 下端から32px
            transform: 'translateX(-50%)', // 画像幅の半分だけ戻して中央揃え
          }}
        />
        </Box>
      </Container>

      {/* FifthSection */}
      <Container maxWidth="sm" sx={{ pt: 6 ,  px: 5}}>
        <Stack spacing={3} alignItems="center">
          <Typography 
            fontWeight="bold" 
            textAlign="center" 
            sx={{ mb: '10px', color: "#192C89", fontSize: 20 }}
          >
            千葉県特化だからできること
          </Typography>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <FifthCard 
              title={"千葉県の医療機関を熟知"} 
              imgUrl={fifthSectionImg} 
              firstDescription={"市川、船橋、松戸、柏、千葉、成田、木更津などエリア別対応をします。"} 
              secondDescription={"病院規模、看護体制、離職率、雰囲気を把握しています。"}
            />
            <FifthCard 
              title={"通勤や生活スタイルを含めた提案"} 
              imgUrl={fifthSectionSecondImg} 
              firstDescription={"都内通勤と千葉県勤務の比較し、より生活スタイルにあった働き方をご提案します。"} 
              secondDescription={"車通勤可能、お子様の保育園事情など細かな条件を考慮します。"}
            />
            <FifthCard 
              title={"非公開求人の紹介"} 
              imgUrl={fifthSectionThirdImg} 
              firstDescription={"一般には出回らない好条件求人も紹介可能\nです。"} 
            />
          </Stack>
        </Stack>
      </Container>

      {/* SixthSection */}
      <Container maxWidth="sm" sx={{ mt: 6,pt: 4, px: 2, backgroundColor: "#FEF0F6" }}>
        <Stack spacing={3} alignItems="center">
          <Typography
            fontWeight="bold"
            textAlign="center"
            sx={{ fontSize: 20, color: "#192C89" }}
          >
            ちば看護が選ばれる理由
          </Typography>
          <Typography  
            fontWeight="bold" 
            textAlign="center" 
            sx={{ fontSize: 16, whiteSpace: 'pre-wrap', color: "#3448AC" }}
          >
            {`大手エージェントではなく\n「千葉特化」だからこそできること`}
          </Typography>
          <Stack spacing={2}>
            <SixthCard description={"千葉県内の医療機関・施設のみを扱う"} circleText={"01"}/>
            <SixthCard description={"担当者が千葉県の医療事情を理解している"} circleText={"02"}/>
            <SixthCard description={"転職を急かさず、まずは相談から受けれる"} circleText={"03"}/>
            <SixthCard description={"条件交渉、入職後フォローまで一貫対応"} circleText={"04"}/>
          </Stack>
          <Typography  
            fontWeight="bold" 
            textAlign="center" 
            sx={{ fontSize: 16, pb: 5/2, whiteSpace: 'pre-wrap', color: "#3448AC" }}
          >
            {`「求人数が多い」よりも\nミスマッチを起こさないことを重視`}
          </Typography>
        </Stack>
      </Container>
      <Box
        maxWidth="sm"
        sx={{
          position: 'relative',     // 子のabsolute配置の基準
          width: '100%',
        }}
      >
      <img src={semiEclipse} alt="Semi Eclipse" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100%', height: 'auto', }} />
      <Box
        component="img"
        src={agreement}
        alt="Agreement"
        sx={{
          width: "149px",
          height: "169px",
          position: 'absolute',
          left: '50%',
          bottom: 16,
          transform: 'translateX(-50%)',
        }}
      />
      </Box>

      {/* SeventhSection */}
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Stack spacing={3} alignItems="center">
          <CustomButton />
          <Typography 
            fontWeight="bold" 
            textAlign="center" 
            sx={{ fontSize: 20, color: "#192C89", fontWeight: 700 }}
          >
            転職成功事例
          </Typography>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <SeventhCard 
              circleImageUrl={seventhSectionFirstFaceImg} 
              jobTitle={"30代女性　病棟看護師（千葉市）"} 
              jobDescription={"夜勤が辛く転職。日勤のみのクリニックへ。\n年収はほぼ維持、生活リズムは改善しました。"}
            />
            <SeventhCard 
              circleImageUrl={seventhSectionSecondFaceImg} 
              jobTitle={"40代女性　訪問看護未経験（船橋市）"} 
              jobDescription={"教育体制の整っている訪問看護ステーション\nへの転職に成功。通勤時間も短くなりました"}
            />
          </Stack>
        </Stack>
      </Container>

      {/* EighthSection */}
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Stack spacing={2} alignItems="center" sx={{px: 5/2}}>
          <Typography
            fontWeight="bold"
            textAlign="center"
            sx={{ fontSize: 20, fontWeight: 700, color: "#192C89" }}
          >
            転職までの流れ
          </Typography>
          {/* ここで親の Stack に width: '100%' を指定 */}
          <Stack spacing={1} sx={{ width: "100%", px: 5/2}}>
            <EighthCard stepText={"STEP 1"} description={"無料登録"} iconUrl={freeRegister} />
            <EighthCard stepText={"STEP 2"} description={"ヒアリング"} subDescription={"（電話・オンライン可）"} iconUrl={hearing} />
            <EighthCard stepText={"STEP 3"} description={"求人紹介"} iconUrl={introduceApplication} />
            <EighthCard stepText={"STEP 4"} description={"面接・条件交渉"} iconUrl={interview} />
            <EighthCard stepText={"STEP 5"} description={"内定・入職"} iconUrl={huntedJob} />
          </Stack>
          <CustomButton />
        </Stack>
      </Container>

      {/* NinthSection */}
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Stack spacing={3} alignItems="center">
          <Typography
            fontWeight="bold"
            textAlign="center"
            sx={{ fontSize: 20, color: "#192C89" }}
          >
            よくある質問
          </Typography>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <NinthCard 
              questionText="大手転職エージェントとの違いは？" 
              answerText={`ちば看護は千葉県に特化しているため、求人の\n質、内部情報、地域情報の理解度が異なります。`}
            />
            <NinthCard 
              questionText="無理に転職を勧められませんか？" 
              answerText={`無理な提案は一切行いません。相談のみの利用\nも歓迎です。`}
            />
            <NinthCard 
              questionText="千葉県以外の求人はありますか？" 
              answerText="原則、千葉県内の求人のみを扱っています。"
            />
          </Stack>
        </Stack>
      </Container>

      {/* TenthSection */}
      <Container maxWidth="sm" sx={{ mt: 9, py: 3, px: 2, backgroundColor: "#FEF0F6" }}>
        <Box sx={{py: 3, px: 4, backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={tenthSectionImg} alt="Tenth Section" style={{ width: '45px', height: '73px' }} />
          <Typography  
            fontWeight="bold" 
            textAlign="center" 
            sx={{ fontSize: 12, fontWeight: 600, whiteSpace: 'pre-wrap', color: "#303030", pb: 3, pt: 2}}
          >
            {`千葉県で看護師として働くなら、\nちば看護にお任せください。\n大手にはない、地域密着の情報と丁寧なサポートで\nあなたに本当に合う職場をご提案します。`}
          </Typography>
          <CustomButton variant="large" />
          </Box>
      </Container>

      {/* Footer */}
      <Box maxWidth="sm" sx={{ width: '100%', bgcolor: "#ffffff"}}>
        <Footer/>
      </Box>
    </Box>
  );
};

export default App;
