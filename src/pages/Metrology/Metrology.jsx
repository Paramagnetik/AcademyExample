import { Box, Paper, Typography, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.png';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import img13 from './images/13.jpg';
import img14 from './images/14.jpg';
import img15 from './images/15.jpg';
import img16 from './images/16.jpg';
import img17 from './images/17.jpg';
import img18 from './images/18.jpg';
import img19 from './images/19.png';
import './Metrology.css';

export default function Metrology() {
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
      title: 'Аттестация испытательного оборудования',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img1,
    },
    {
      title: 'Вибрационный контроль, мониторинг и диагностика машинного оборудования',
      desc: '(Повышение квалификации на базе среднего или высшего образования).',
      img: img2,
    },
    {
      title: 'Испытание средств измерений в целях утверждения типа',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img3,
    },
    {
      title: 'Метрологическая экспертиза научно-технической документации',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img4,
    },
    {
      title: 'Метрологический надзор',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img5,
    },
    {
      title: 'Метрологическое обеспечение организаций здравоохранение',
      desc: '(Повышение квалификации на базе среднего или высшего образования).',
      img: img6,
    },
    {
      title: 'Метрологическое обеспечение производства',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img7,
    },
    {
      title: 'Метрологическое обеспечение производства',
      desc: '(Повышение квалификации на базе среднего или высшего образования.',
      img: img8,
    },
    {
      title: 'Поверка и калибровка средств измерений массы',
      desc: '(Повышение квалификации на базе среднего или высшего образования).',
      img: img9,
    },
    {
      title: 'Поверка и калибровка средств механических измерений',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img10,
    },
    {
      title: 'Проверка и калибровка средств измерений в области лабораторной медицины',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img11,
    },
    {
      title: 'Проверка и калибровка оптико-физических и физико-химических средств измерений',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img12,
    },
    {
      title: 'Проверка и калибровка средств геометрический измерений',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img13,
    },
    {
      title: 'Проверка и калибровка средств теплотехнических измерений (давления, температуры, расхода)',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img14,
    },
    {
      title: 'Проверка и калибровка средств электрических измерений',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img15,
    },
    {
      title: 'Проверка и калибровка средств радиотехнических измерений',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img16,
    },
    {
      title: 'Радиационная безопасность и дозиметрический контроль',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img17,
    },
    {
      title: 'Радиационный контроль',
      desc: '(Профпереподготовка на базе высшего или среднего образования)',
      img: img18,
    },
    {
      title: 'Специалист по метрологии',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img19,
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
        Метрология — направления обучения
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
