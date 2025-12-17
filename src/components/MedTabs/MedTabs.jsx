import { useState } from 'react';
import { Tabs, Tab, Box, Typography, Paper, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import './MedTabs.css';
import { BreadcrumbsSEO } from '../BreadcrumbsSEO';
export default function MedTabs() {
  const [tab, setTab] = useState(0);

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <BreadcrumbsSEO
        items={[
          {
            name: 'Главная',
            url: 'https://www.xn--80aabfqjj3bddt.shop/',
          },
        ]}
      />
      <section className="medtabs-wrapper">
        <Typography variant="h3" fontWeight="bold" gutterBottom className="section-title">
          Для медработников
        </Typography>

        <Paper className="medtabs-container" elevation={6}>
          <Tabs
            value={tab}
            onChange={handleChange}
            variant="scrollable"
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
                <Typography variant="h6" fontWeight={400} gutterBottom component="div">
                  Бесплатная консультация и проверка документов <br />
                  Полный пакет сопровождения + подача в ФАЦ <br />
                  Все документы фиксируются в ФИС ФРДО
                </Typography>
              </Paper>

              <Paper className="info-card">
                <Typography component="div" className="tab-list">
                  <div className="list-item">
                    Периодическая аккредитация медицинских работников под ключ — 8 000 руб.
                  </div>

                  <div className="list-item">
                    Профессиональная переподготовка:
                    <div className="sub-list">
                      <div className="sub-item">категория «Средний медицинский персонал» — 8 000 руб.</div>
                      <div className="sub-item">категория «Врачи» — 10 000 руб.</div>
                    </div>
                  </div>

                  <div className="list-item">Повышение квалификации 144 ак/часа — 2 000 руб.</div>

                  <div className="list-item">Удостоверения по темам: 36/72/144 ак/часов — 500/1000/2000 руб.</div>

                  <div className="list-item">Написание портфолио + отчёт за 5 лет — 4 000 руб.</div>

                  <div className="list-item">Баллы НМО: курсы 14, 36, 50, 144, 250 ак/часов</div>
                </Typography>

                {/* Контакты */}
                <div className="inline-contact-buttons">
                  <IconButton className="contact-icon whatsapp" href="https://wa.me/79105622738" target="_blank">
                    <WhatsAppIcon fontSize="medium" />
                  </IconButton>

                  <IconButton
                    className="contact-icon telegram"
                    href="https://t.me/Grisha_Akademiayobrazovaniay"
                    target="_blank"
                  >
                    <TelegramIcon fontSize="medium" />
                  </IconButton>

                  <IconButton
                    className="contact-icon email"
                    href="mailto:g.karpov@academyros.ru?subject=Запрос на обучение"
                  >
                    <EmailIcon fontSize="medium" />
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
                <IconButton className="contact-icon whatsapp" href="https://wa.me/79105622738" target="_blank">
                  <WhatsAppIcon fontSize="large" />
                </IconButton>

                <IconButton
                  className="contact-icon telegram"
                  href="https://t.me/Grisha_Akademiayobrazovaniay"
                  target="_blank"
                >
                  <TelegramIcon fontSize="large" />
                </IconButton>

                <IconButton className="contact-icon email" href="mailto:g.karpov@academyros.ru">
                  <EmailIcon fontSize="large" />
                </IconButton>
              </div>
            </Box>
          )}
        </Paper>
      </section>
    </>
  );
}
