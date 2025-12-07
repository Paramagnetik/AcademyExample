import { Container, Typography, Paper } from '@mui/material';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <Container maxWidth="md">
        <Paper elevation={4} className="hero-paper">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Добро пожаловать!
          </Typography>

          <Typography variant="h6" lineHeight={1.6}>
            Я, <b>Григорий</b>, ведущий менеджер популярного учебного центра, рад приветствовать вас и представить нашим
            потенциальным клиентам уникальное предложение по повышению квалификации и профессиональной подготовки для
            всех сфер деятельности.
          </Typography>
        </Paper>
      </Container>
    </section>
  );
}
