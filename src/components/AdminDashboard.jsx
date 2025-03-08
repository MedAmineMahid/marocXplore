import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { saveItem, getItems, deleteItem, saveImage } from '../utils/database';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${({$active}) => $active ? '#e74c3c' : 'transparent'};
  color: ${({$active}) => $active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({$active}) => $active ? '#e74c3c' : '#f0f0f0'};
  }
`;

const ContentForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #c0392b;
  }
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ItemCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 1rem;
`;

const ItemActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const ReportButton = styled(Button)`
  margin-top: 1rem;
  width: auto;
`;

const PDFModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PDFContent = styled.div`
  width: 90%;
  height: 90%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  value: {
    fontSize: 14,
    marginBottom: 5,
  },
});

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('visits');
  const [items, setItems] = useState([]); // Initialize as empty array

  useEffect(() => {
    setItems([]); // Initialize items as empty array
  }, []);
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    sector: '',
    duration: '',
    location: ''
  });

  useEffect(() => {
    loadItems();
  }, [activeTab]);

  const loadItems = async () => {
    const loadedItems = await getItems(activeTab);
    setItems(Array.isArray(loadedItems) ? loadedItems : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let imagePath = '';
    if (formData.image) {
      imagePath = await saveImage(formData.image);
    }

    const newItem = {
      ...formData,
      image: imagePath,
      type: activeTab
    };

    const id = await saveItem(newItem);
    newItem.id = id;
    
    setItems(prev => [newItem, ...prev]);
    setFormData({
      title: '',
      description: '',
      image: null,
      sector: '',
      duration: '',
      location: ''
    });
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const PDFReport = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{activeTab.toUpperCase()} Report</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.label}>Title</Text>
            <Text style={styles.value}>{item.title}</Text>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{item.description}</Text>
            <Text style={styles.label}>{activeTab === 'visits' ? 'Sector' : 'Category'}</Text>
            <Text style={styles.value}>{item.sector}</Text>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.value}>{item.duration}</Text>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{item.location}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <DashboardContainer>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginBottom: '2rem', color: '#1a1a1a' }}
      >
        Content Management Dashboard
      </motion.h1>

      <TabContainer>
        <Tab
          $active={activeTab === 'visits'}
          onClick={() => setActiveTab('visits')}
        >
          Visits
        </Tab>
        <Tab
          $active={activeTab === 'actions'}
          onClick={() => setActiveTab('actions')}
        >
          Actions
        </Tab>
        <Tab
          $active={activeTab === 'about'}
          onClick={() => setActiveTab('about')}
        >
          About
        </Tab>
      </TabContainer>

      <ContentForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Image</Label>
          <FileInput
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>{activeTab === 'visits' ? 'Sector' : 'Category'}</Label>
          <Input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Duration</Label>
          <Input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Location</Label>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button type="submit">Add New Item</Button>
      </ContentForm>

      <ReportButton onClick={() => setShowReport(true)}>
        Generate Report
      </ReportButton>

      <ItemList>
        {items.map(item => (
          <ItemCard key={item.id}>
            <ItemImage src={item.image} alt={item.title} />
            <ItemContent>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>{activeTab === 'visits' ? 'Sector' : 'Category'}:</strong> {item.sector}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p><strong>Location:</strong> {item.location}</p>
            </ItemContent>
            <ItemActions>
              <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </ItemActions>
          </ItemCard>
        ))}
      </ItemList>

      {showReport && (
        <PDFModal>
          <CloseButton onClick={() => setShowReport(false)}>×</CloseButton>
          <PDFContent>
            <PDFViewer width="100%" height="100%">
              <PDFReport />
            </PDFViewer>
          </PDFContent>
        </PDFModal>
      )}
    </DashboardContainer>
  );
}

export default AdminDashboard;