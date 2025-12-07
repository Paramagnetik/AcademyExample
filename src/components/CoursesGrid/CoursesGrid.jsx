import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import './CoursesGrid.css';

// Пример данных — каждый курс: картинка, заголовок, путь (route), описание
const courses = [
  {
    title: 'Медицина',
    img: '/images/course-medicine.jpg',
    route: '/courses/medicina',
    description: 'Переподготовка, повышение квалификации, аккредитация медицинских работников',
  },
  {
    title: 'Охрана труда и безопасность',
    img: '/images/course-safety.jpg',
    route: '/courses/safety',
    description: 'Курсы охраны труда, промышленной безопасности, пожарной безопасности',
  },
  {
    title: 'Профпереподготовка',
    img: '/images/course-retraining.jpg',
    route: '/courses/retraining',
    description: 'Профессиональная переподготовка по разным направлениям',
  },
  {
    title: 'Курсы повышение квалификации',
    img: '/images/course-qualification.jpg',
    route: '/courses/qualification',
    description: 'Удостоверения, повышение квалификации, тематические курсы',
  },
  // Добавь столько, сколько тебе нужно
];

export default function CoursesGrid() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <section className="courses-grid-section">
      <Typography variant="h4" className="courses-grid-title" align="center" gutterBottom>
        Курсы
      </Typography>

      <Box className="courses-grid">
        {courses.map((c, idx) => (
          <Paper key={idx} className="course-card" elevation={4} onClick={() => handleClick(c.route)}>
            <div className="course-image-wrapper">
              <img src={c.img} alt={c.title} className="course-image" />
            </div>
            <Box className="course-body">
              <Typography variant="h6" className="course-title">
                {c.title}
              </Typography>
              <Typography variant="body2" className="course-desc">
                {c.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </section>
  );
}
