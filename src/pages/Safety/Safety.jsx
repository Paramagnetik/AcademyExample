import { Box, Paper, Typography, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import img1 from './images/1w.jpeg';
import img2 from './images/2w.jpg';
import img3 from './images/3w.png';
import img4 from './images/4w.jpg';
import img5 from './images/5w.jpeg';
import img6 from './images/6w.jpg';
import img7 from './images/7w.jpg';
import img8 from './images/8w.jpeg';
import img9 from './images/9w.jpeg';
import img10 from './images/10w.jpeg';
import img11 from './images/11w.jpg';
import img12 from './images/12w.jpg';
import img13 from './images/13w.jpg';
import img14 from './images/14w.jpg';
import './Safety.css';

export default function Safety() {
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
      title:
        'Безопасные методы и приемы выполнения работ повышенной опасности, к которым предъявляются дополнительные требования в соответствии с нормативными правовым актами, содержащими государственные нормативные требования охраны труда',
      desc: '(Обучение на базе среднего)2',
      img: img1,
    },
    {
      title:
        'Безопасные методы и приемы выполнения работ при воздействии вредных и (или) опасных производственных факторов, источников опасности, идентифицированных в рамках специальной оценки условий труда и оценки профессиональных рисков',
      desc: '(Обучение на базе среднего или высшего образования )',
      img: img2,
    },
    {
      title: 'Общие вопросы охраны труда и функционирование системы управления охраной труда',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img3,
    },
    {
      title: 'Охрана окружающей среды и экологическая безопасность',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img4,
    },
    ,
    {
      title: 'Оказание первой помощи',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img5,
    },
    ,
    {
      title: 'Охрана окружающей среды и экологическая безопасность',
      desc: '(Профессиональная переподготовка на базе среднего или высшего образования)',
      img: img6,
    },
    ,
    {
      title: 'Охрана труда для работников организаций',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img7,
    },
    ,
    {
      title: 'Охрана труда на высоте (1 группа допуска)',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img8,
    },
    ,
    {
      title: 'Охрана труда на высоте (2 группа допуска)',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img9,
    },
    ,
    {
      title: 'Охрана труда на высоте (3 группа допуска)',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img10,
    },
    ,
    {
      title: 'Оценка и управление профессиональными рисками2',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img11,
    },
    ,
    {
      title: 'Применение средст индивидуальной защиты (СИЗ)',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img12,
    },
    ,
    {
      title: 'Специалист по охране труда',
      desc: '(Профессиональная переподготовка на базе среднего или высшего образования)',
      img: img13,
    },
    ,
    {
      title: 'Техносферная безопасность',
      desc: '(Профессиональная переподготовка на базе среднего или высшего образования)',
      img: img14,
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
        Охрана труда — направления обучения
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
              <Typography className="courses-inner-card-desc">{item.desc}</Typography>
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
