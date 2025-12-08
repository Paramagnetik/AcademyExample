import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <p className="footer-consult-text">По всем вопросам и консультациям вы можете обратиться через мессенджеры</p>
      <div className="footer-icons">
        <IconButton color="inherit" href="https://wa.me/79105622738" target="_blank">
          <WhatsAppIcon fontSize="large" />
        </IconButton>

        <IconButton color="inherit" href="https://t.me/Grisha_Akademiayobrazovaniay" target="_blank">
          <TelegramIcon fontSize="large" />
        </IconButton>

        <IconButton color="inherit" href="tel:+79105622738">
          <PhoneIcon fontSize="large" />
        </IconButton>

        <IconButton color="inherit" href="mailto:g.karpov@academyros.ru@mail.ru">
          <EmailIcon fontSize="large" />
        </IconButton>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Академия образования — Григорий. Все права защищены.</p>
    </footer>
  );
}
