import { Container, Typography, Paper } from '@mui/material';
import './Services.css';

export default function Services() {
  const items = [
    'Аккредитация медицинских работников под ключ:',
    '— Первичная',
    '— Периодическая',
    '— Периодическая (без стажа) СПО/ВО',
    'Профессиональная переподготовка: 288, 432, 576 ак/часов',
    'Повышение квалификации: 144, 216 ак/часов',
    'Удостоверения по темам: 36, 72, 144 ак/часов',
    'Написание портфолио и отчёта за 5 лет',
    'Баллы НМО: курсы 14, 36, 50, 144, 250 ак/часов',
    'Бесплатная консультация и проверка документов',
    'Полный пакет сопровождения + подача в ФАЦ',
    'Гарантия результата',
    'Работаем со всеми профессиями, не только с медиками',
    'Скидки, акции, программа «Приведи друга»',
    'Аттестация по рабочим специальностям — Приказ №534',
    'Обучение по охране труда, пожарной и промышленной безопасности',
    'Подключение к ЕГИСЗ',
    'Все документы фиксируются в ФИС ФРДО',
  ];

  return (
    <section className="services-wrapper">
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Для медработников
        </Typography>

        <Paper elevation={3} className="services-paper">
          <Typography variant="h6" gutterBottom>
            Преимущества нашего учебного центра:
          </Typography>

          <div className="services-list">
            {items.map((item, index) => (
              <div key={index} className="service-item">
                {item}
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    </section>
  );
}
