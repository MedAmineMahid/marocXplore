import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getItems } from '../utils/database';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 0;
  background: white;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TeamMemberContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamMemberName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #e74c3c;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TeamMemberDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems('about');
      setTeamMembers(data);
    };
    fetchData();
  }, []);
  return (
    <AboutSection>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#1a1a1a'
        }}
      >
        Notre Équipe
      </motion.h2>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <TeamMemberImage src={member.image} alt={member.name} />
            <TeamMemberContent>
              <TeamMemberName>{member.name}</TeamMemberName>
              <TeamMemberRole>{member.role}</TeamMemberRole>
              <TeamMemberDescription>{member.description}</TeamMemberDescription>
            </TeamMemberContent>
          </TeamCard>
        ))}
      </TeamGrid>
    </AboutSection>
  );
}

export default About;