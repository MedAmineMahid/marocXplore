import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
import Attractions from './components/Attractions';
import About from './components/About';
import Actions from './components/Actions';
import Visits from './components/Visits';
import Logo from './components/Logo';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

const cities = ['Tanger', 'Marrakesh', 'Chefchaouen', 'Essaouira', 'Dakhla'];
const categories = ['Hotel', 'Gastronomie', 'Nature', 'Sport'];

const CategoryFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  max-width: 1200px;
  margin: 0 auto;

  & > div {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CategoryButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 25px;
  background: ${props => props.$active ? '#e74c3c' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#333'};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.$active ? '#c0392b' : '#e0e0e0'};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;



const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Hero = styled.div`
  height: 70vh;
  width: 100vw;
  margin-top: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/images/morocco-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    height: 50vh;
    margin-top: 50px;
  }
`;



const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #e74c3c;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;



const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #c0392b;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background: ${props => props.background || 'white'};
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

function App() {
  const [activeCity, setActiveCity] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showVisits, setShowVisits] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    dateArrivee: '',
    dateDepart: '',
    budget: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Navbar>
        <Logo />
        <NavLinks>
          <NavLink href="#" onClick={() => {
            setShowAbout(false);
            setShowActions(false);
            setShowVisits(false);
            setShowAdmin(false);
          }}>Accueil</NavLink>
          <NavLink href="#" onClick={() => {
            setShowAbout(false);
            setShowActions(true);
            setShowVisits(false);
            setShowAdmin(false);
          }}>Actions</NavLink>
          <NavLink href="#" onClick={() => {
            setShowAbout(false);
            setShowActions(false);
            setShowVisits(true);
            setShowAdmin(false);
          }}>Visits</NavLink>
          <NavLink href="#" onClick={() => {
            setShowAbout(false);
            setShowActions(false);
            setShowVisits(false);
            setShowAdmin(true);
          }}>Admin</NavLink>
          <NavLink href="#" onClick={() => {
  setShowAbout(true);
  setShowActions(false);
  setShowVisits(false);
  setShowAdmin(false);
}}>About</NavLink>
        </NavLinks>
      </Navbar>

      {!showAbout && !showActions && !showVisits && !showAdmin ? (
        <>
          <Hero>
            <div>
              <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Découvrez le Maroc
              </Title>
              <Subtitle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Une expérience unique entre tradition et modernité
              </Subtitle>
            </div>
          </Hero>

          <CategoryFilter>
            <div>
              {cities.map((city) => (
                <CategoryButton
                  key={city}
                  onClick={() => setActiveCity(city === activeCity ? null : city)}
                  style={{
                    background: city === activeCity ? '#e74c3c' : 'white',
                    color: city === activeCity ? 'white' : 'inherit'
                  }}
                >
                  {city}
                </CategoryButton>
              ))}
            </div>
            <div>
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                  style={{
                    background: category === activeCategory ? '#e74c3c' : 'white',
                    color: category === activeCategory ? 'white' : 'inherit'
                  }}
                >
                  {category}
                </CategoryButton>
              ))}
            </div>
          </CategoryFilter>

          <Attractions activeCategory={activeCategory} activeCity={activeCity} />
        </>
      ) : showActions ? (
        <Actions activeCategory={activeCategory} />
      ) : showVisits ? (
        <Visits />
      ) : showAdmin ? (
        <AdminDashboard />
      ) : (
        <About />
      )}
      <Footer />
    </Container>
  );
}

export default App;
