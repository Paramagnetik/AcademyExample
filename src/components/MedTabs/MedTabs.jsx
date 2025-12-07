import { useState } from 'react';
import { Tabs, Tab, Box, Typography, Paper, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import './MedTabs.css';

export default function MedTabs() {
  const [tab, setTab] = useState(0);

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <section className="medtabs-wrapper">
      <Typography variant="h4" fontWeight="bold" gutterBottom className="section-title">
        Для медработников
      </Typography>

      <Paper className="medtabs-container" elevation={6}>
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          className="medtabs-tabs"
          TabIndicatorProps={{
            style: { height: 4, borderRadius: 4, backgroundColor: '#1976d2' },
          }}
        >
          <Tab label="Периодическая аккредитация" />
          <Tab label="Помощь в получении ПСА/ПА и Периодическая аккредитация (без стажа)" />
        </Tabs>

        {/* TAB 1 */}
        {tab === 0 && (
          <Box className="tab-content fade-in">
            <Typography variant="h5" fontWeight={600} gutterBottom className="tab-title">
              Преимущества нашего учебного центра
            </Typography>

            <Paper className="info-card">
              <Typography variant="h6" fontWeight={400} gutterBottom>
                Бесплатная консультация и проверка документов <br />
                Полный пакет сопровождения + подача в ФАЦ <br />
                Все документы фиксируются в ФИС ФРДО
              </Typography>
            </Paper>

            <Paper className="info-card">
              <Typography className="tab-text">
                • Периодическая аккредитация медицинских работников под ключ - 8 тыс. руб.
                <br />
                • Профессиональная переподготовка: <br /> категория «Средний медицинский персонал» — 8 000 руб. <br />
                категория «Врачи» — 10 000 руб.
                <br />
                • Повышение квалификации 144 ак/часа - 2 тыс.руб.
                <br />
                • Удостоверения по темам: 36/72/144 ак/часов - 500/1000/2000 руб.
                <br />
                • Написание портфолио + отчёт за 5 лет - 4 тыс.руб.
                <br />
                • Баллы НМО: курсы 14, 36, 50, 144, 250 ак/часов
                <br />
              </Typography>
              {/* === НОВЫЕ КНОПКИ WhatsApp + Telegram === */}
              <div className="inline-contact-buttons">
                <IconButton className="contact-icon whatsapp" href="https://wa.me/79999999999" target="_blank">
                  <WhatsAppIcon fontSize="medium" />
                </IconButton>

                <IconButton className="contact-icon telegram" href="https://t.me/username" target="_blank">
                  <TelegramIcon fontSize="medium" />
                </IconButton>
              </div>
            </Paper>
          </Box>
        )}

        {/* TAB 2 */}
        {tab === 1 && (
          <Box className="tab-content fade-in">
            <Typography variant="h5" fontWeight={600} gutterBottom className="tab-title">
              По всем вопросам обращаться в WhatsApp или Telegram:
            </Typography>

            <div className="contact-buttons">
              <IconButton className="contact-icon whatsapp" href="https://wa.me/79999999999" target="_blank">
                <WhatsAppIcon fontSize="large" />
              </IconButton>

              <IconButton className="contact-icon telegram" href="https://t.me/username" target="_blank">
                <TelegramIcon fontSize="large" />
              </IconButton>
            </div>
          </Box>
        )}
      </Paper>
    </section>
  );
}
