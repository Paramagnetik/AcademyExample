import { Box, Paper, Typography, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import img1 from './images/1r.png';
import img2 from './images/2r.jpg';
import img3 from './images/3r.jpg';
import img4 from './images/4r.jpg';
import img5 from './images/5r.jpg';
import img6 from './images/6r.jpg';
import img7 from './images/7r.jpg';
import img8 from './images/8r.jpg';
import img9 from './images/9r.jpg';
import img10 from './images/10r.jpg';
import img11 from './images/11r.jpg';
import img12 from './images/12r.jpg';
import './FireSafety.css';

export default function FireSafety() {
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
      title: 'Выполнение работ по огнезащите материалов, изделий и конструкций',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img1,
    },
    {
      title: 'Гражданская оборона и защита от черезвычайных ситуаций природного и техногенного характера',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img2,
    },
    {
      title:
        'Деятельность по монтажу, техническому обслуживанию и ремонту средств обеспечения пожалной безопасности зданий и сооружений',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img3,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт автоматических систем (элементов автоматических систем), противодымной вентиляции, включая диспетчеризацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img4,
    },
    {
      title: 'Монтаж, техническое обслуживание и ремонт заполнений проемов в противопожарных преградах',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img5,
    },
    {
      title: 'Монтаж, техническое обслуживание и ремонт первичных средств пожаротушения',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img6,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт противоаожарных занавесов и завес, включая диспетчирезацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img7,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт систем оповещения и эвакуации при пожаре и их элементов, включая диспетчерезацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img8,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт систем пожарной и охранно-пожарной сигнализации и их элементов, включая диспетчеризацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img9,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт систем пожаротушения и их элементов, включая диспетчеризацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img10,
    },
    {
      title:
        'Монтаж, техническое обслуживание и ремонт систем противопожарного водоснабжения и их элементов, включая диспетчеризацию и проведение пусконаладочных работ',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img11,
    },
    {
      title: 'Монтаж, техническое обслуживание и ремонт фотолюминесцентных эвакуационных систем и их элементов',
      desc: '(Курс подготовки специалистов для лицензии МЧС)',
      img: img12,
    },
    {
      title: 'Обеспечение гражданской обороны и защиты от чрезвычайных ситуаций',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img9,
    },
    {
      title:
        'Обучение главных специалистов технического и производственного профиля на объектах проживания или временного пребыва 50 или более человек одновременно и на объектах повышенной взрывоопасности',
      desc: '(Повышение квалификации на базе среднего и высшего образования)',
      img: img8,
    },
    {
      title: 'Обучение лиц, проводящих противопожарный инструктаж',
      desc: '(Повышение квалификации на базе среднего и высшего образования)',
      img: img1,
    },
    {
      title: 'Обучение населения в области гражданской обороны и защиты от чрезвычайных ситуаций',
      desc: '(Обучение на базе среднего или высшего образования)',
      img: img2,
    },
    {
      title: 'Обучение руководителей организаций, ИП и ответственных за обеспечение пожарной безопасности',
      desc: '(Повышение квалификации на базе среднего и высшего образования)',
      img: img3,
    },
    {
      title:
        'Обучение руководителей эксплуатирующих и управляющих пожарную безапасность и ответственных за такое обеспечение',
      desc: '(Повышение квалификации на базе среднего и высшего образования',
      img: img4,
    },
    {
      title: 'Пожарная безопасность',
      desc: '(Профессиональная переподготовка для специалистов со средним и высшим образованием)',
      img: img5,
    },
    {
      title: 'Специалист по противопожарной профилактике',
      desc: '(Профессиональная переподготовка для специалистов со средним и высшим образованием)',
      img: img6,
    },
    {
      title: 'Техносферная безопасност',
      desc: '(Профессиональная переподготовка для специалистов со средним и высшим образованием)',
      img: img7,
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
        Пожарная безопасность — направления обучения
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
