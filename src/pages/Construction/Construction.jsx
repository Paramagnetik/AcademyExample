import { Box, Paper, Typography, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import img1 from './images/1f.jpg';
import img2 from './images/2f.jpg';
import img3 from './images/3f.jpg';
import img4 from './images/4f.jpg';
import img5 from './images/5f.jpg';
import img6 from './images/6f.jpg';
import img7 from './images/7f.jpg';
import img8 from './images/8f.jpg';
import img9 from './images/9f.jpg';
import img10 from './images/10f.jpg';
import img11 from './images/11f.jpg';
import img12 from './images/12f.jpg';
import img13 from './images/13f.jpg';
import img14 from './images/14f.jpg';
import img15 from './images/15f.jpg';
import img16 from './images/16f.jpg';
import img17 from './images/17f.jpg';
import img18 from './images/18f.jpg';
import img19 from './images/19f.jpg';
import img20 from './images/20f.jpg';
import img21 from './images/21f.jpg';
import img22 from './images/22f.jpg';
import img23 from './images/23f.jpg';
import img24 from './images/24f.jpg';
import img25 from './images/25f.jpg';
import img26 from './images/26f.jpg';
import './Construction.css';

export default function Construction() {
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
      title: 'Актуальные вопросы законодательства в области кадастровой деятельности',
      desc: '(Повышение квалификации на базе высшего образования)',
      img: img1,
    },
    {
      title: 'Актуальные проблемы взаимодействия субъектов кадастровых отношений',
      desc: '(Повышение квалификации на базе высшего образования)',
      img: img2,
    },
    {
      title: 'Безопасность строительства. Организация строительства, реконструкции и капитального ремонта',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img3,
    },
    {
      title: 'Государственный строительный надзор и строительный контроль',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img4,
    },
    {
      title: 'Инженерно-геодезические изыскания',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img5,
    },
    {
      title: 'Кадастровая деятельность',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img6,
    },
    {
      title: 'Менеджер по работе с технологиями информационного моделирования',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img7,
    },
    {
      title: 'Монтаж электрооборудования и систем электроснабжения',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img8,
    },
    {
      title: 'Нефтегазовое дело',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img9,
    },
    {
      title: 'Нормативно-правовые стандарты в примененияя технологий информационного моделирования',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img10,
    },
    {
      title: 'Организация строительства.',
      desc: '(Повышение квалификации на базе высшего образования)',
      img: img11,
    },
    {
      title: 'Проектрирование зданий и сооружений. Технологии информационного моделирования',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img12,
    },
    {
      title: 'Промышленное и гражданское строительство(ПГС)',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img13,
    },
    {
      title: 'Снабжение в строительстве',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img14,
    },
    {
      title: 'Современные технологии в области кадастровой деятельности',
      desc: '(Повышение квалификации на базе высшего образования)',
      img: img15,
    },
    {
      title: 'Строительный контроль и управление качеством в строительстве',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img16,
    },
    {
      title: 'Строительный контроль и управление качеством в строительстве с применением BIM',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img17,
    },
    {
      title: 'Строительство, реконструкция и капитальный ремонт объектов капитального строительства',
      desc: '(Повышение квалификации на базе среднего или высшего образования',
      img: img18,
    },
    {
      title: 'Технологии информационного моделирования в работе экономиста и инженера сметчика',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img19,
    },
    {
      title: 'Технологии информационного моделирования в строительстве',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img20,
    },
    {
      title: 'Технологии информационного моделирования для главного архитектора проекта',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img21,
    },
    {
      title: 'Техносферная безопасност',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img22,
    },
    {
      title: 'Ценообразование и сметное нормирование в строительстве',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img23,
    },
    {
      title: 'Ценообразование и сметное нормирование в строительстве',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img24,
    },
    {
      title: 'Электроснабжение',
      desc: '(Профпереподготовка на базе среднего или высшего образования)',
      img: img25,
    },
    {
      title: 'Электроснабжение',
      desc: '(Повышение квалификации на базе среднего или высшего образования)',
      img: img26,
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
        Строительство — направления обучения
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
