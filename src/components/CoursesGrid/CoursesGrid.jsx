import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import imgMetrology from './images/metrologija.jpg';
import imgSafety from './images/ohranaTruda.jpg';
import imgFire from './images/pozharnaja.jpg';
import imgConstruction from './images/stroitelstvo.jpg';
import imgWork from './images/rabochie.jpg';
import './CoursesGrid.css';

export default function CoursesGrid() {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'Метрология',
      img: imgMetrology,
      desc: 'Обучение метрологов и поверителей. Аттестация оборудования.',
      route: '/courses/metrology',
    },
    {
      title: 'Охрана труда',
      img: imgSafety,
      desc: 'Обучение по охране труда и безопасным методам выполнения работ.',
      route: '/courses/safety',
    },
    {
      title: 'Пожарная безопасность',
      img: imgFire,
      desc: 'Инструктажи, обучение, пожарно-технический минимум.',
      route: '/courses/fire',
    },
    {
      title: 'Рабочие специальности',
      img: imgWork,
      desc: 'Обучение рабочим специальностям А Аппаратчик (Профессиональное обучение, без образования) Пройти',
      route: '/courses/work',
    },
    {
      title: 'Строительство',
      img: imgConstruction,
      desc: 'Обучение специалистов строительной сферы, техника безопасности.',
      route: '/courses/construction',
    },
  ];

  return (
    <section className="courses-section">
      <Typography variant="h4" className="courses-title" align="center" gutterBottom>
        Основные направления обучения в области дополнительного профессионального образования
      </Typography>

      <Box className="courses-grid">
        {courses.map((item, index) => (
          <Paper key={index} className="course-card" elevation={4} onClick={() => navigate(item.route)}>
            <div className="course-img-wrap">
              <img src={item.img} alt={item.title} className="course-img" />
            </div>

            <Box className="course-content">
              <Typography variant="h6" className="course-title-text">
                {item.title}
              </Typography>

              <Typography className="course-desc">{item.desc}</Typography>

              <Typography className="course-link">Подробнее »</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </section>
  );
}
