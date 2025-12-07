import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-icons">
        <IconButton color="inherit" href="https://wa.me/79999999999" target="_blank">
          <WhatsAppIcon fontSize="large" />
        </IconButton>

        <IconButton color="inherit" href="https://t.me/username" target="_blank">
          <TelegramIcon fontSize="large" />
        </IconButton>

        <IconButton color="inherit" href="tel:+79999999999">
          <PhoneIcon fontSize="large" />
        </IconButton>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Академия образования — Григорий. Все права защищены.</p>
    </footer>
  );
}
