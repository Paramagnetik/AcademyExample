import { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Paper, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

export default function Header() {
  // Отдельные состояния для каждого меню
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const [menu3Open, setMenu3Open] = useState(false);

  // Состояние подменю (только у второй кнопки)
  const [menu2SubOpen, setMenu2SubOpen] = useState(false);

  // Мобильное меню
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Позиции меню
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const mainMenuRef = useRef(null);
  const btnRefs = useRef({});

  const [submenuPosition, setSubmenuPosition] = useState('right');

  const mainItems = ['Парам Парам Пам Пам', 'Парам Парам Пам Пам', 'Парам Парам Пам Пам'];
  const subItems = ['Сделаю всё чётко', 'Сделаю всё чётко', 'Сделаю всё чётко'];

  // Универсальная функция — вычисление позиции меню
  const computeMenuPos = (key) => {
    const rect = btnRefs.current[key]?.getBoundingClientRect();
    if (!rect) return;

    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  // --- Toggle меню 1 ---
  const toggleMenu1 = () => {
    computeMenuPos('m1');
    setMenu1Open(!menu1Open);
    setMenu2Open(false);
    setMenu3Open(false);
    setMenu2SubOpen(false);
  };

  // --- Toggle меню 2 ---
  const toggleMenu2 = () => {
    computeMenuPos('m2');
    setMenu2Open(!menu2Open);
    setMenu1Open(false);
    setMenu3Open(false);
    setMenu2SubOpen(false);
  };

  // --- Toggle меню 3 ---
  const toggleMenu3 = () => {
    computeMenuPos('m3');
    setMenu3Open(!menu3Open);
    setMenu1Open(false);
    setMenu2Open(false);
    setMenu2SubOpen(false);
  };

  // Подменю (только у второго блока)
  const openSubmenu2 = () => {
    if (!mainMenuRef.current) return;

    const menuRect = mainMenuRef.current.getBoundingClientRect();
    const submenuWidth = 220;
    const spaceRight = window.innerWidth - menuRect.right;

    setSubmenuPosition(spaceRight < submenuWidth ? 'left' : 'right');
    setMenu2SubOpen(true);
  };

  // Закрывать dropdown при скролле/resize
  useEffect(() => {
    const closeAll = () => {
      setMenu1Open(false);
      setMenu2Open(false);
      setMenu3Open(false);
      setMenu2SubOpen(false);
      setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', closeAll);
    window.addEventListener('resize', closeAll);

    return () => {
      window.removeEventListener('scroll', closeAll);
      window.removeEventListener('resize', closeAll);
    };
  }, []);

  return (
    <>
      <AppBar position="sticky" elevation={6}>
        <div className="header-container">
          <Toolbar className="toolbar" disableGutters>
            <Typography variant="h6" className="logo">
              Академия образования — Григорий
            </Typography>

            {/* Мобильная кнопка */}
            {/* <IconButton color="inherit" className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton> */}

            {/* Десктоп меню */}
            {/* <Box className="header-buttons desktop-menu">
              <Button className="header-btn" ref={(el) => (btnRefs.current['m1'] = el)} onClick={toggleMenu1}>
                — Помощь в получении ПСА/ПА
                <span className={`arrow ${menu1Open ? 'rotated' : ''}`}>∨</span>
              </Button>

              <Button className="header-btn" ref={(el) => (btnRefs.current['m2'] = el)} onClick={toggleMenu2}>
                — Периодическая аккредитация
                <span className={`arrow ${menu2Open ? 'rotated' : ''}`}>∨</span>
              </Button>

              <Button className="header-btn" ref={(el) => (btnRefs.current['m3'] = el)} onClick={toggleMenu3}>
                — Периодическая (без стажа) СПО/ВО
                <span className={`arrow ${menu3Open ? 'rotated' : ''}`}>∨</span>
              </Button>
            </Box> */}
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
}
