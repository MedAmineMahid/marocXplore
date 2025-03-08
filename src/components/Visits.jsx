import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getItems } from '../utils/database';

const VisitSection = styled.section`
  padding: 2rem 0;
  background: white;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const VisitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const VisitCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const VisitImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const VisitContent = styled.div`
  padding: 1rem;
`;

const VisitTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const VisitDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const VisitDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;

  span {
    font-size: 1rem;
    color: #e74c3c;
    font-weight: 500;
  }

  small {
    color: #666;
    font-size: 0.8rem;
  }
`;

function Visits() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems('visits');
      setVisits(data);
    };
    fetchData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <VisitSection>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#1a1a1a'
        }}
      >
        Visites d'Entreprises
      </motion.h2>
      <VisitGrid>
        {visits.map((visit, index) => (
          <VisitCard
            key={visit.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <VisitImage src={visit.image} alt={visit.title} />
            <VisitContent>
              <VisitTitle>{visit.title}</VisitTitle>
              <VisitDescription>{visit.description}</VisitDescription>
              <VisitDetails>
                <div>
                  <span>{visit.sector}</span>
                  <small> • {visit.duration}</small>
                </div>
                <small>{visit.location}</small>
              </VisitDetails>
            </VisitContent>
          </VisitCard>
        ))}
      </VisitGrid>
    </VisitSection>
  );
}

export default Visits;