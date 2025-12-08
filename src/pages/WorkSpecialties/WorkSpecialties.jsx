import { Box, Paper, Typography, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import img1 from './images/1h.jpg';
import './WorkSpecialties.css';

export default function WorkSpecialties() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Генерация ссылок
  const generateText = (title, desc) => encodeURIComponent(`Хочу пройти обучение:\n\n${title}\n${desc}`);

  const whatsappLink = (title, desc) => `https://wa.me/79105622738?text=${generateText(title, desc)}`;

  const telegramLink = (title, desc) => `https://t.me/Grisha_Akademiayobrazovaniay?text=${generateText(title, desc)}`;

  const emailLink = (title, desc) =>
    `mailto:g.karpov@academyros.ru?subject=${encodeURIComponent('Запрос на обучение')}&body=${generateText(
      title,
      desc
    )}`;
  const courses = [
    {
      title: 'Любая рабочая специальность',
      desc: `Согласно 
        <a href="https://www.garant.ru/products/ipo/prime/doc/407425777/" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="color:#1976d2; text-decoration:underline;">
           Приказу Министерства просвещения РФ от 14 июля 2023 г. № 534
        </a>`,
      img: img1,
    },
  ];

  const getTelegramLink = (title, desc) => {
    const text = `Хочу пройти обучение:\n\n${title}\n${desc}`;
    return `https://t.me/Grisha_Akademiayobrazovaniay?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="courses-inner-section">
      {/* КНОПКА НАЗАД */}
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowBackIcon />
        Назад
      </button>
      <Typography variant="h4" className="courses-inner-title" align="center">
        Рабочие специальности — направления обучения
      </Typography>

      <Box className="courses-inner-grid">
        {courses.map((item, index) => (
          <Paper key={index} className="courses-inner-card" elevation={4}>
            <div className="courses-inner-img-wrap">
              <img src={item.img} alt={item.title} className="courses-inner-img" />
            </div>

            <Box className="courses-inner-content">
              <Typography variant="h6" className="courses-inner-card-title">
                {item.title}
              </Typography>
              <Typography className="courses-inner-card-desc" dangerouslySetInnerHTML={{ __html: item.desc }} />
              <Button
                variant="contained"
                color="primary"
                className="courses-inner-button"
                sx={{ marginTop: '12px', borderRadius: '10px' }}
                onClick={() => handleOpenModal(item)}
              >
                Пройти обучение
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
      {/* Модальное окно */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <Typography variant="h6" mb={2}>
            Выберите удобный способ связи
          </Typography>

          <Box className="modal-buttons">
            <Button
              variant="contained"
              color="success"
              href={selectedCourse ? whatsappLink(selectedCourse.title, selectedCourse.desc) : '#'}
              target="_blank"
            >
              WhatsApp
            </Button>

            <Button
              variant="contained"
              color="primary"
              href={selectedCourse ? telegramLink(selectedCourse.title, selectedCourse.desc) : '#'}
              target="_blank"
            >
              Telegram
            </Button>

            <Button
              variant="contained"
              color="secondary"
              href={selectedCourse ? emailLink(selectedCourse.title, selectedCourse.desc) : '#'}
            >
              Email
            </Button>
          </Box>
        </Box>
      </Modal>
    </section>
  );
}
