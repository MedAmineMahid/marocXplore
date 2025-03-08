import { motion } from 'framer-motion';
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

const teamMembers = [
  {
    id: 1,
    name: 'Sarah El Mansouri',
    role: 'Lead Developer',
    description: 'Experte en développement web avec une passion pour la création d\'interfaces utilisateur intuitives et performantes.',
    image: '/images/team/sarah.jpg'
  },
  {
    id: 2,
    name: 'Youssef Alami',
    role: 'UI/UX Designer',
    description: 'Designer créatif spécialisé dans la conception d\'expériences utilisateur mémorables et esthétiques.',
    image: '/images/team/youssef.jpg'
  },
  {
    id: 3,
    name: 'Fatima Zahra Bennani',
    role: 'Full Stack Developer',
    description: 'Développeuse polyvalente avec une expertise en technologies front-end et back-end.',
    image: '/images/team/fatima.jpg'
  },
  {
    id: 4,
    name: 'Karim Idrissi',
    role: 'Project Manager',
    description: 'Gestionnaire de projet expérimenté avec un fort accent sur la satisfaction client et la qualité.',
    image: '/images/team/karim.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function About() {
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