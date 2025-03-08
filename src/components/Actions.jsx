import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getItems } from '../utils/database';
import styled from 'styled-components';

const ActionSection = styled.section`
  padding: 2rem 0;
  background: white;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const ActionCard = styled(motion.div)`
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

const ActionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ActionContent = styled.div`
  padding: 1rem;
`;

const ActionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const ActionDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ActionDetails = styled.div`
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


function Actions({ activeCategory }) {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems('actions');
      setActions(data);
    };
    fetchData();
  }, []);

  const filteredActions = activeCategory
    ? actions.filter(action => action.category === activeCategory)
    : actions;

  return (
    <ActionSection>
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
        Actions Bénévoles
      </motion.h2>
      <ActionGrid>
        {filteredActions.map((action, index) => (
          <ActionCard
            key={action.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ActionImage src={action.image} alt={action.title} />
            <ActionContent>
              <ActionTitle>{action.title}</ActionTitle>
              <ActionDescription>{action.description}</ActionDescription>
              <ActionDetails>
                <div>
                  <span>{action.category}</span>
                  <small> • {action.duration}</small>
                </div>
                <small>{action.location}</small>
              </ActionDetails>
            </ActionContent>
          </ActionCard>
        ))}
      </ActionGrid>
    </ActionSection>
  );
}

export default Actions;