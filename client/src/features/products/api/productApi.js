import laitImg from '../../../assets/lait.png';
import hrisaCapImg from '../../../assets/hrisaCap.png';
import faaImg from '../../../assets/faa.png';
import maakrnaImg from '../../../assets/maakrna.png';

// Temporary mock data until backend is integrated
const mockProducts = [
  { id: 1, name: "Lait - délice - 1 L", price: 1, image: laitImg, category: "dairy" },
  { id: 2, name: "Hrisa Cap", price: 2, image: hrisaCapImg, category: "condiments" },
  { id: 3, name: "Faa", price: 2, image: faaImg, category: "grains" },
  { id: 4, name: "Maakrna", price: 3, image: maakrnaImg, category: "pasta" },
];

export const getProducts = async (filters) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredProducts = [...mockProducts];

  // Apply filters
  if (filters.category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }

  // Apply sorting
  filteredProducts.sort((a, b) => {
    const modifier = filters.order === 'asc' ? 1 : -1;
    return (a[filters.sortBy] - b[filters.sortBy]) * modifier;
  });

  return filteredProducts;
};