import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
import Attractions from './components/Attractions';
import About from './components/About';

const cities = ['Tanger', 'Marrakesh', 'Chefchaouen', 'Essaouira', 'Dakhla'];
const categories = ['Hotel', 'Gastronomie', 'Nature', 'Sport'];

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
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
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: #f8f9fa;
  margin: 0;
  width: 100vw;
  overflow-x: auto;
  box-sizing: border-box;
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
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e74c3c;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
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

const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e74c3c;
    color: white;
    border-color: #e74c3c;
  }
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
        <Logo>MarocXplore</Logo>
        <NavLinks>
          <NavLink href="#" onClick={() => setShowAbout(false)}>Accueil</NavLink>
          <NavLink href="#" onClick={() => setShowAbout(false)}>Destinations</NavLink>
          <NavLink href="#" onClick={() => setShowAbout(true)}>À propos</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
      </Navbar>

      {!showAbout ? (
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
          </CategoryFilter>

          <CategoryFilter>
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
          </CategoryFilter>

          <Attractions activeCategory={activeCategory} activeCity={activeCity} />

          <Section background="#f8f9fa">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Réservez Votre Voyage</h2>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="telephone"
                placeholder="Votre téléphone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
              <Input
                type="date"
                name="dateArrivee"
                placeholder="Date d'arrivée"
                value={formData.dateArrivee}
                onChange={handleChange}
                required
              />
              <Input
                type="date"
                name="dateDepart"
                placeholder="Date de départ"
                value={formData.dateDepart}
                onChange={handleChange}
                required
              />
              <Input
                type="number"
                name="budget"
                placeholder="Votre budget (en MAD)"
                value={formData.budget}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver maintenant
              </Button>
            </Form>
          </Section>
        </>
      ) : (
        <About />
      )}
    </Container>
  );
}

export default App;
