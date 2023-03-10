import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import s from "./SignForCanvas.module.css";

export const SignForCanvas = () => {
  return(
    <div className={s.containerForData}>
      <AddPhotoAlternateOutlinedIcon/>
      <div className={s.firstTextBlock}>Перетащите сюда</div>
      <div className={s.secondTextBlock}>
        <div>любой контент</div>
        <div>из левой панели</div>
      </div>
    </div>
  )
}