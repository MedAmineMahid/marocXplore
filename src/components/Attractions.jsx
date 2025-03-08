import { motion } from 'framer-motion';
import styled from 'styled-components';

const AttractionSection = styled.section`
  padding: 2rem 0;
  background: white;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const AttractionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const AttractionCard = styled(motion.div)`
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

const AttractionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  &:not([src]), &[src=""] {
    display: none;
  }
`;

const AttractionContent = styled.div`
  padding: 1rem;
`;

const AttractionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const AttractionDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const AttractionPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  small {
    color: #666;
    font-size: 0.8rem;
  }
`;

const cities = ['Tanger', 'Marrakesh', 'Chefchaouen', 'Essaouira', 'Dakhla'];

const attractions = [
  // Marrakesh
  // Hotels
  {
    id: 1,
    title: 'La Mamounia Palace',
    description: 'Hôtel de luxe 5 étoiles avec jardins historiques et spa de classe mondiale.',
    image: '/images/attractions/Marrakesh/mamounia.jpg',
    price: '5000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Marrakesh'
  },
  {
    id: 2,
    title: 'Riad Dar Karma',
    description: 'Riad traditionnel 4 étoiles avec piscine et restaurant marocain.',
    image: '/images/attractions/Marrakesh/riad-karma.jpg',
    price: '1200 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Marrakesh'
  },
  {
    id: 3,
    title: 'Royal Mansour',
    description: 'Palace luxueux offrant une expérience unique avec des riads privés.',
    image: '/images/attractions/Marrakesh/royal-mansour.jpg',
    price: '8000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Marrakesh'
  },
  // Gastronomie
  {
    id: 4,
    title: 'Cours de Cuisine Marocaine',
    description: 'Apprenez à préparer des plats traditionnels marocains.',
    image: '/images/attractions/Marrakesh/cooking.jpg',
    price: '600 MAD',
    duration: '4 heures',
    category: 'Gastronomie',
    city: 'Marrakesh'
  },
  {
    id: 5,
    title: 'Dîner au Palais Namaskar',
    description: 'Expérience gastronomique dans un cadre somptueux.',
    image: '/images/attractions/Marrakesh/namaskar.jpg',
    price: '1500 MAD',
    duration: 'par personne',
    category: 'Gastronomie',
    city: 'Marrakesh'
  },
  {
    id: 6,
    title: 'Food Tour Médina',
    description: 'Découverte des saveurs locales dans les ruelles de la médina.',
    image: '/images/attractions/Marrakesh/food-tour.jpg',
    price: '400 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Marrakesh'
  },
  // Nature
  {
    id: 7,
    title: 'Atlas Trekking',
    description: 'Randonnée guidée dans les montagnes de l\'Atlas.',
    image: '/images/attractions/Marrakesh/atlas-trek.jpg',
    price: '400 MAD',
    duration: '1 jour',
    category: 'Nature',
    city: 'Marrakesh'
  },
  {
    id: 8,
    title: 'Jardin Majorelle',
    description: 'Visite du célèbre jardin et de son musée berbère.',
    image: '/images/attractions/Marrakesh/majorelle.jpg',
    price: '200 MAD',
    duration: '2 heures',
    category: 'Nature',
    city: 'Marrakesh'
  },
  {
    id: 9,
    title: 'Palmeraie à Chameau',
    description: 'Balade à dos de chameau dans la palmeraie de Marrakech.',
    image: '/images/attractions/Marrakesh/palmaraie.jpg',
    price: '300 MAD',
    duration: '2 heures',
    category: 'Nature',
    city: 'Marrakesh'
  },
  // Sport
  {
    id: 10,
    title: 'Quad dans le désert',
    description: 'Aventure en quad dans le désert d\'Agafay.',
    image: '/images/attractions/Marrakesh/quad.jpg',
    price: '800 MAD',
    duration: '4 heures',
    category: 'Sport',
    city: 'Marrakesh'
  },
  {
    id: 11,
    title: 'Golf Royal',
    description: 'Parcours de golf 18 trous avec vue sur l\'Atlas.',
    image: '/images/attractions/Marrakesh/golf.jpg',
    price: '1200 MAD',
    duration: 'journée',
    category: 'Sport',
    city: 'Marrakesh'
  },
  {
    id: 12,
    title: 'Escalade Atlas',
    description: 'Escalade guidée dans les gorges de l\'Atlas.',
    image: '/images/attractions/Marrakesh/climbing.jpg',
    price: '600 MAD',
    duration: '6 heures',
    category: 'Sport',
    city: 'Marrakesh'
  },

  // Essaouira
  // Hotels
  {
    id: 13,
    title: 'Heure Bleue Palais',
    description: 'Hôtel 5 étoiles avec vue sur l\'océan et spa luxueux.',
    image: '/images/attractions/Essaouira/heure-bleue.jpg',
    price: '3000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Essaouira'
  },
  {
    id: 14,
    title: 'Riad Mimouna',
    description: 'Riad 3 étoiles traditionnel avec vue sur les remparts.',
    image: '/images/attractions/Essaouira/mimouna.jpg',
    price: '800 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Essaouira'
  },
  {
    id: 15,
    title: 'Villa de l\'Océan',
    description: 'Villa luxueuse en bord de mer avec piscine privée.',
    image: '/images/attractions/Essaouira/villa-ocean.jpg',
    price: '4000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Essaouira'
  },
  // Gastronomie
  {
    id: 16,
    title: 'Atelier Poisson',
    description: 'Cours de cuisine spécialisé dans les fruits de mer.',
    image: '/images/attractions/Essaouira/fish-cooking.jpg',
    price: '500 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Essaouira'
  },
  {
    id: 17,
    title: 'Atelier Cuisine de Poisson et Fruits de Mer',
    description: 'Découvrez les secrets de la cuisine des fruits de mer locale avec nos chefs experts. Une expérience culinaire unique avec des produits frais du port.',
    image: '/images/attractions/Essaouira/seafood-workshop.jpg',
    price: 75,
    rating: 4.8,
    category: 'Gastronomie',
    city: 'Essaouira'
  },
  {
    id: 18,
    title: 'Port Fishing Tour',
    description: 'Visite du port et dégustation de poissons frais.',
    image: '/images/attractions/Essaouira/port-tour.jpg',
    price: '300 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Essaouira'
  },
  // Nature
  {
    id: 19,
    title: 'Réserve Naturelle de Sidi Kaouki',
    description: 'Exploration de la réserve naturelle et observation des oiseaux.',
    image: '/images/attractions/Essaouira/sidi-kaouki.jpg',
    price: '250 MAD',
    duration: '4 heures',
    category: 'Nature',
    city: 'Essaouira'
  },
  {
    id: 20,
    title: 'Randonnée Côtière',
    description: 'Randonnée le long des falaises et plages sauvages.',
    image: '/images/attractions/Essaouira/coastal-hike.jpg',
    price: '300 MAD',
    duration: '5 heures',
    category: 'Nature',
    city: 'Essaouira'
  },
  {
    id: 21,
    title: 'Jardin des Dunes',
    description: 'Visite guidée des jardins écologiques dans les dunes.',
    image: '/images/attractions/Essaouira/dune-garden.jpg',
    price: '150 MAD',
    duration: '2 heures',
    category: 'Nature',
    city: 'Essaouira'
  },
  // Sport
  {
    id: 22,
    title: 'Surf à Essaouira',
    description: 'Cours de surf pour tous niveaux sur les plages ventées.',
    image: '/images/attractions/Essaouira/surf.jpg',
    price: '400 MAD',
    duration: '3 heures',
    category: 'Sport',
    city: 'Essaouira'
  },
  {
    id: 23,
    title: 'Kitesurf',
    description: 'Session de kitesurf avec instructeur qualifié.',
    image: '/images/attractions/Essaouira/kitesurf.jpg',
    price: '600 MAD',
    duration: '4 heures',
    category: 'Sport',
    city: 'Essaouira'
  },
  {
    id: 24,
    title: 'Beach Volley',
    description: 'Session de beach-volley sur la plage principale.',
    image: '/images/attractions/Essaouira/beach-volley.jpg',
    price: '100 MAD',
    duration: '2 heures',
    category: 'Sport',
    city: 'Essaouira'
  },

  // Chefchaouen
  // Hotels
  {
    id: 25,
    title: 'Lina Ryad & Spa',
    description: 'Hôtel 5 étoiles avec vue panoramique sur la ville bleue.',
    image: '/images/attractions/Chefchaouen/lina-ryad.jpg',
    price: '2500 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Chefchaouen'
  },
  {
    id: 26,
    title: 'Casa Hassan',
    description: 'Hôtel 3 étoiles au cœur de la médina bleue.',
    image: '/images/attractions/Chefchaouen/casa-hassan.jpg',
    price: '700 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Chefchaouen'
  },
  {
    id: 27,
    title: 'Dar Echchaouen',
    description: 'Riad traditionnel avec terrasse panoramique.',
    image: '/images/attractions/Chefchaouen/dar-echchaouen.jpg',
    price: '1200 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Chefchaouen'
  },
  // Gastronomie
  {
    id: 28,
    title: 'Atelier Cuisine Rifaine',
    description: 'Découverte de la cuisine traditionnelle du Rif.',
    image: '/images/attractions/Chefchaouen/rif-cooking.jpg',
    price: '400 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Chefchaouen'
  },
  {
    id: 29,
    title: 'Dégustation de Fromages',
    description: 'Découverte des fromages de chèvre locaux.',
    image: '/images/attractions/Chefchaouen/cheese-tasting.jpg',
    price: '250 MAD',
    duration: '2 heures',
    category: 'Gastronomie',
    city: 'Chefchaouen'
  },
  {
    id: 30,
    title: 'Tour Gastronomique Médina',
    description: 'Exploration des saveurs de la médina bleue.',
    image: '/images/attractions/Chefchaouen/medina-food.jpg',
    price: '350 MAD',
    duration: '4 heures',
    category: 'Gastronomie',
    city: 'Chefchaouen'
  },
  // Nature
  {
    id: 31,
    title: 'Randonnée au Parc Talassemtane',
    description: 'Découverte de la nature spectaculaire des montagnes du Rif.',
    image: '/images/attractions/Chefchaouen/talassemtane.jpg',
    price: '400 MAD',
    duration: '6 heures',
    category: 'Nature',
    city: 'Chefchaouen'
  },
  {
    id: 32,
    title: 'Cascade d\'Akchour',
    description: 'Randonnée vers les magnifiques cascades d\'Akchour.',
    image: '/images/attractions/Chefchaouen/akchour.jpg',
    price: '300 MAD',
    duration: '5 heures',
    category: 'Nature',
    city: 'Chefchaouen'
  },
  {
    id: 33,
    title: 'Pont de Dieu',
    description: 'Excursion au célèbre pont naturel.',
    image: '/images/attractions/Chefchaouen/god-bridge.jpg',
    price: '250 MAD',
    duration: '4 heures',
    category: 'Nature',
    city: 'Chefchaouen'
  },
  // Sport
  {
    id: 34,
    title: 'Escalade du Rif',
    description: 'Escalade dans les montagnes du Rif.',
    image: '/images/attractions/Chefchaouen/rif-climbing.jpg',
    price: '500 MAD',
    duration: '6 heures',
    category: 'Sport',
    city: 'Chefchaouen'
  },
  {
    id: 35,
    title: 'VTT en Montagne',
    description: 'Parcours VTT dans les sentiers montagneux.',
    image: '/images/attractions/Chefchaouen/mountain-bike.jpg',
    price: '400 MAD',
    duration: '4 heures',
    category: 'Sport',
    city: 'Chefchaouen'
  },
  {
    id: 36,
    title: 'Canyoning Akchour',
    description: 'Aventure en canyoning dans les gorges d\'Akchour.',
    image: '/images/attractions/Chefchaouen/canyoning.jpg',
    price: '600 MAD',
    duration: '5 heures',
    category: 'Sport',
    city: 'Chefchaouen'
  },

  // Tanger
  // Hotels
  {    id: 61,
    title: 'Mövenpick Hotel & Casino Malabata',
    description: 'Hôtel 5 étoiles avec vue sur le détroit et casino.',
    image: '/images/attractions/Tanger/movenpick-tanger.jpg',
    price: '2000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Tanger'
  },
  {    id: 62,
    title: 'El Minzah Hotel',
    description: 'Hôtel historique au cœur de Tanger.',
    image: '/images/attractions/Tanger/minzah-hotel.jpg',
    price: '1500 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Tanger'
  },
  {    id: 63,
    title: 'Marina Bay',
    description: 'Hôtel moderne avec vue sur le port de plaisance.',
    image: '/images/attractions/Tanger/marina-bay.jpg',
    price: '1200 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Tanger'
  },
  // Gastronomie
  {    id: 64,
    title: 'Saveurs du Détroit',
    description: 'Restaurant gastronomique avec vue panoramique.',
    image: '/images/attractions/Tanger/saveurs-detroit.jpg',
    price: '500 MAD',
    duration: 'par personne',
    category: 'Gastronomie',
    city: 'Tanger'
  },
  {    id: 65,
    title: 'Restaurant Populaire',
    description: 'Cuisine traditionnelle tangéroise authentique.',
    image: '/images/attractions/Tanger/restaurant-tanger.jpg',
    price: '150 MAD',
    duration: 'par personne',
    category: 'Gastronomie',
    city: 'Tanger'
  },
  {    id: 66,
    title: 'Tour des Cafés Historiques',
    description: 'Découverte des cafés légendaires de Tanger.',
    image: '/images/attractions/Tanger/cafe-tanger.jpg',
    price: '200 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Tanger'
  },
  // Nature
  {    id: 67,
    title: 'Cap Spartel',
    description: 'Visite du phare et point de rencontre des deux mers.',
    image: '/images/attractions/Tanger/cap-spartel.jpg',
    price: '100 MAD',
    duration: '2 heures',
    category: 'Nature',
    city: 'Tanger'
  },
  {    id: 68,
    title: 'Parc Perdicaris',
    description: 'Balade dans le parc forestier historique.',
    image: '/images/attractions/Tanger/perdicaris.jpg',
    price: '50 MAD',
    duration: '2 heures',
    category: 'Nature',
    city: 'Tanger'
  },
  {    id: 69,
    title: 'Croisière dans le Détroit',
    description: 'Navigation entre Méditerranée et Atlantique.',
    image: '/images/attractions/Tanger/detroit-cruise.jpg',
    price: '400 MAD',
    duration: '3 heures',
    category: 'Nature',
    city: 'Tanger'
  },
  // Sport
  {    id: 70,
    title: 'Planche à Voile',
    description: 'Session de windsurf sur les plages de Tanger.',
    image: '/images/attractions/Tanger/windsurf-tanger.jpg',
    price: '400 MAD',
    duration: '2 heures',
    category: 'Sport',
    city: 'Tanger'
  },
  {    id: 71,
    title: 'Royal Golf Tanger',
    description: 'Parcours de golf avec vue sur le détroit.',
    image: '/images/attractions/Tanger/golf-tanger.jpg',
    price: '800 MAD',
    duration: 'journée',
    category: 'Sport',
    city: 'Tanger'
  },
  {    id: 72,
    title: 'Tennis Club de Tanger',
    description: 'Courts de tennis en terre battue face à la mer.',
    image: '/images/attractions/Tanger/tennis-tanger.jpg',
    price: '200 MAD',
    duration: '1 heure',
    category: 'Sport',
    city: 'Tanger'
  },

  // Dakhla
  // Hotels
  {
    id: 49,
    title: 'Dakhla Club Hotel',
    description: 'Hôtel 4 étoiles avec vue sur la lagune.',
    image: '/images/attractions/Dakhla/dakhla-club.jpg',
    price: '2000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Dakhla'
  },
  {
    id: 50,
    title: 'Ocean Vagabond',
    description: 'Éco-lodge 3 étoiles en bord de mer.',
    image: '/images/attractions/Dakhla/ocean-vagabond.jpg',
    price: '1000 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Dakhla'
  },
  {
    id: 51,
    title: 'Dakhla Attitude',
    description: 'Resort de luxe spécialisé dans les sports nautiques.',
    image: '/images/attractions/Dakhla/dakhla-attitude.jpg',
    price: '2500 MAD',
    duration: 'par nuit',
    category: 'Hotel',
    city: 'Dakhla'
  },
  // Gastronomie
  {
    id: 52,
    title: 'Fruits de Mer Frais',
    description: 'Dégustation de fruits de mer fraîchement pêchés.',
    image: '/images/attractions/Dakhla/seafood.jpg',
    price: '400 MAD',
    duration: '2 heures',
    category: 'Gastronomie',
    city: 'Dakhla'
  },
  {
    id: 53,
    title: 'Cuisine Sahraouie',
    description: 'Découverte de la cuisine traditionnelle sahraouie.',
    image: '/images/attractions/Dakhla/sahraoui-food.jpg',
    price: '300 MAD',
    duration: '3 heures',
    category: 'Gastronomie',
    city: 'Dakhla'
  },
  {
    id: 54,
    title: 'BBQ sur la Plage',
    description: 'Barbecue de poissons sur la plage au coucher du soleil.',
    image: '/images/attractions/Dakhla/beach-bbq.jpg',
    price: '500 MAD',
    duration: 'soirée',
    category: 'Gastronomie',
    city: 'Dakhla'
  },
  // Nature
  {
    id: 55,
    title: 'Lagune de Dakhla',
    description: 'Exploration en bateau de la lagune et ses flamants roses.',
    image: '/images/attractions/Dakhla/dakhla-lagoon.jpg',
    price: '400 MAD',
    duration: '4 heures',
    category: 'Nature',
    city: 'Dakhla'
  },
  {
    id: 56,
    title: 'Désert Blanc',
    description: 'Excursion dans le désert blanc de Dakhla.',
    image: '/images/attractions/Dakhla/white-desert.jpg',
    price: '600 MAD',
    duration: '6 heures',
    category: 'Nature',
    city: 'Dakhla'
  },
  {
    id: 57,
    title: 'Observation des Dauphins',
    description: 'Sortie en mer pour observer les dauphins.',
    image: '/images/attractions/Dakhla/dolphins.jpeg',
    price: '500 MAD',
    duration: '3 heures',
    category: 'Nature',
    city: 'Dakhla'
  },
  // Sport
  {
    id: 58,
    title: 'Kitesurf à Dakhla',
    description: 'Session de kitesurf dans l\'un des meilleurs spots au monde.',
    image: '/images/attractions/Dakhla/dakhla-kite.jpeg',
    price: '600 MAD',
    duration: '3 heures',
    category: 'Sport',
    city: 'Dakhla'
  },
  {
    id: 59,
    title: 'Windsurf',
    description: 'Cours de windsurf pour tous niveaux.',
    image: '/images/attractions/Dakhla/windsurf.jpg',
    price: '500 MAD',
    duration: '3 heures',
    category: 'Sport',
    city: 'Dakhla'
  },
  {
    id: 60,
    title: 'Stand Up Paddle',
    description: 'Balade en paddle sur la lagune.',
    image: '/images/attractions/Dakhla/sup.jpg',
    price: '300 MAD',
    duration: '2 heures',
    category: 'Sport',
    city: 'Dakhla'
  }
];

const categories = ['Hotel', 'Gastronomie', 'Nature', 'Sport'];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Attractions({ activeCategory, activeCity }) {
  const filteredAttractions = attractions.filter(attraction => {
    if (activeCity && activeCategory) {
      return attraction.city === activeCity && attraction.category === activeCategory;
    } else if (activeCity) {
      return attraction.city === activeCity;
    } else if (activeCategory) {
      return attraction.category === activeCategory;
    }
    return true;
  });

  return (
    <AttractionSection>
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
        Destinations Populaires
      </motion.h2>
      <AttractionGrid>
        {filteredAttractions.map((attraction, index) => (
          <AttractionCard
            key={attraction.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AttractionImage 
              src={attraction.image} 
              alt={attraction.title}
            />
            <AttractionContent>
              <AttractionTitle>{attraction.title}</AttractionTitle>
              <AttractionDescription>{attraction.description}</AttractionDescription>
              <AttractionPrice>
                <div>
                  <span>{attraction.price}</span>
                  <small> {attraction.duration}</small>
                </div>
              </AttractionPrice>
            </AttractionContent>
          </AttractionCard>
        ))}
      </AttractionGrid>
    </AttractionSection>
  );
}

export default Attractions;