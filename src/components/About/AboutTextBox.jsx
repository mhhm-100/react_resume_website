import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Box, Link, Typography } from '@mui/material';
import { styleBoxs } from "../../constants/styleBoxs";
import style from "../../assets/styles/style.module.css";
import { Icon2, Icon1 } from "../../assets/icons";
import { ResumePdf } from '../../assets/pdf';

const AboutTextBox = () => {
    const theme = useTheme();
    const { language, isDarkMode } = useContext(themeContext);

    return (
        <Box
            component={'div'}
            className={`aboutText box ${language === "Pe" ? style.flex_right : style.flex_left}`}
            sx={styleBoxs(theme, language)}>
            {isDarkMode ? <Icon2 style={{ left: language === "Pe" && "10%", right: language !== "Pe" && "10%" }} /> : <Icon1 style={{ left: language === "Pe" && "10%", right: language !== "Pe" && "10%", }} />}
            <Typography className='aboutTextTitle' sx={{ color: theme.palette.titleColor }}>
                {
                    language === "Pe" ? "حاجی محمدی" : "Haji Mohammadi"
                }
            </Typography>
            <Typography className='aboutTextCaption' sx={{ color: theme.palette.textColor }}>
                {
                    language === "Pe" ?
                        "محمد حسین حاجی محمدی هستم برنامه نویس فرانت و طراح رابط کاربری حدود سه سال به صورت حرفه ای در این زمینه مشغول به کارم و همیشه سیع داشتم که بهترین نتیجه و کیفیت رو در اختیار مشتریان بذارم امید وارم که بتونیم در کنار هم به بهترین دست آورد ها برسیم ممنون که رزومه من رو انتخاب کردید" :
                        "I am Mohammad Hossein Haji Mohammadi, a front-end programmer and user interface designer. I have been working professionally in this field for about three years, and I always try to provide the best results and quality to customers. I hope that we can work together to I got the best. Thank you for choosing my resume"
                }
            </Typography>
            <Box
                component={'div'}
                className={`downloadButton ${style.flex_center}`}
                style={styleBoxs(theme, language)}
                sx={{
                    left: language === "Pe" && "10px",
                    right: language !== "Pe" && "10px",
                }}>
                <Link href={ResumePdf} sx={{ color: theme.palette.titleColor }}>
                    {
                        language === "Pe" ? "دانلود رزومه" : "DOWNLOAD CV"
                    }
                </Link>
            </Box>
        </Box>
    )
}

export default AboutTextBox;