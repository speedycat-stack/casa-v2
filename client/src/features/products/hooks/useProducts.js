import { useState, useEffect } from "react";
import laitImg from "../../../assets/lait.png";
import farinaImg from "../../../assets/farina.png";
import hlibImg from "../../../assets/hlib.jpg";
import hrissaImg from "../../../assets/hrissa.png";
import makarounaImg from "../../../assets/makarouna.png";
import waterImg from "../../../assets/water.png";
import appleImg from "../../../assets/apple.png";

const dummyProducts = [
  {
    id: "619404300201",
    name: "Farina",
    price: "1.5",
    image: farinaImg,
    ean: "619404300201 (EAN / EAN-13)",
    quantity: "1 kg",
    details: {
      Packaging: "Paper bag",
      Brands: "L'epi d'or",
      Categories: "Grains, Flour",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
      "Production date": "01/05/2025",
      "Expiration date": "01/05/2026",
      "Nutritional facts":
        "Calories: 364 kcal per 100g, Protein: 10g, Carbohydrates: 76g, Fat: 1g",
    },
  },
  {
    id: "619404300202",
    name: "Hlib Délice",
    price: "1.0",
    image: hlibImg,
    ean: "619404300202 (EAN / EAN-13)",
    quantity: "1 L",
    details: {
      Packaging: "Plastic bottle",
      Brands: "Délice",
      Categories: "Dairy, Milk",
      Labels: "Fresh",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
      "Production date": "04/05/2025",
      "Expiration date": "11/05/2025",
      "Storage instructions": "Keep refrigerated at 4°C",
      "Nutritional facts":
        "Calories: 42 kcal per 100ml, Protein: 3.3g, Carbohydrates: 4.5g, Fat: 1.5g",
    },
  },
  {
    id: "619404300203",
    name: "Hrissa",
    price: "2.0",
    image: hrissaImg,
    ean: "619404300203 (EAN / EAN-13)",
    quantity: "150 g",
    details: {
      Packaging: "Glass jar",
      Brands: "Sicam",
      Categories: "Condiments, Hot sauce",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
      "Production date": "15/03/2025",
      "Expiration date": "15/03/2026",
      "Storage instructions":
        "Store in a cool, dry place. Refrigerate after opening",
      Ingredients:
        "Red chili peppers, garlic, coriander, caraway, salt, olive oil",
      "Nutritional facts":
        "Calories: 40 kcal per 15g serving, Protein: 1g, Carbohydrates: 3g, Fat: 3g",
      "Spiciness level": "Medium hot",
    },
  },
  {
    id: "619404300204",
    name: "Makarouna",
    price: "1.2",
    image: makarounaImg,
    ean: "619404300204 (EAN / EAN-13)",
    quantity: "500 g",
    details: {
      Packaging: "Plastic package",
      Brands: "Pasta",
      Categories: "Pasta, Spaghetti",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
      "Production date": "20/04/2025",
      "Expiration date": "20/04/2026",
      "Storage instructions": "Store in a cool, dry place",
      "Cooking instructions":
        "Boil in salted water for 8-10 minutes until al dente",
      Ingredients: "Durum wheat semolina",
      "Nutritional facts":
        "Calories: 350 kcal per 100g, Protein: 12g, Carbohydrates: 70g, Fat: 1.5g",
    },
  },
  {
    id: "619404300205",
    name: "Lait UHT",
    price: "1.5",
    image: laitImg,
    ean: "619404300205 (EAN / EAN-13)",
    quantity: "1 L",
    details: {
      Packaging: "Tetrapak",
      Brands: "Vitalait",
      Categories: "Dairy, Milk, UHT",
      Labels: "UHT, Long-life",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
      "Production date": "01/05/2025",
      "Expiration date": "01/08/2025",
      "Storage instructions":
        "Store in a cool, dry place. Refrigerate after opening and consume within 3 days",
      "Nutritional facts":
        "Calories: 46 kcal per 100ml, Protein: 3.2g, Carbohydrates: 4.8g, Fat: 1.6g",
      Processing: "Ultra-high temperature processing for extended shelf life",
    },
  },
  {
    id: "619404300206",
    name: "Eau Minérale",
    price: "0.8",
    image: waterImg,
    ean: "619404300206 (EAN / EAN-13)",
    quantity: "1.5 L",
    details: {
      Packaging: "Plastic bottle",
      Brands: "Safia",
      Categories: "Beverages, Water",
      Labels: "Natural, Mineral, Spring water",
      Origin: "Natural springs of Zaghouan, Tunisia",
      "Manufacturing or processing places": "Tunisia",
      "Bottling date": "02/05/2025",
      "Expiration date": "02/05/2027",
      "Storage instructions":
        "Store in a cool, dry place away from direct sunlight",
      "Mineral composition":
        "Calcium: 80mg/L, Magnesium: 24mg/L, Sodium: 15mg/L, Potassium: 3mg/L",
      "pH level": "7.2",
    },
  },
  {
    id: "619404300207",
    name: "Pommes",
    price: "3.0",
    image: appleImg,
    ean: "619404300207 (EAN / EAN-13)",
    quantity: "1 kg",
    details: {
      Packaging: "None",
      Categories: "Fruits, Fresh produce",
      "Origin of ingredients": "Tunisia",
      "Growing region": "Sbiba, Kasserine Governorate",
      "Harvest date": "01/05/2025",
      "Storage instructions": "Keep refrigerated for maximum freshness",
      Variety: "Golden Delicious",
      "Farming method": "Conventional",
      "Nutritional facts":
        "Calories: 52 kcal per 100g, Fiber: 2.4g, Vitamin C: 4.6mg",
      "Usage suggestions":
        "Perfect for eating fresh, baking, or making apple sauce",
    },
  },
  {
    id: "619404300208",
    name: "Farina Premium",
    price: "1.8",
    image: farinaImg,
    ean: "619404300208 (EAN / EAN-13)",
    quantity: "1 kg",
    details: {
      Packaging: "Paper bag",
      Brands: "L'epi d'or Premium",
      Categories: "Grains, Flour, Premium",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
      "Production date": "28/04/2025",
      "Expiration date": "28/04/2026",
      "Storage instructions": "Store in a cool, dry place",
      Ingredients:
        "100% premium wheat flour, enriched with vitamins and minerals",
      "Nutritional facts":
        "Calories: 364 kcal per 100g, Protein: 12g, Carbohydrates: 74g, Fat: 1g",
      "Product features":
        "Finely milled for smoother texture, ideal for pastry and bread making",
      "Quality grade": "Premium",
    },
  },
];

const useProducts = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

        if (productId) {
          const product = dummyProducts.find(
            (p) => p.id.toString() === productId.toString()
          );
          if (!product) {
            throw new Error("Product not found");
          }
          setProducts([product]);
        } else {
          setProducts(dummyProducts);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return {
    products,
    loading,
    error,
    filters,
    setFilters,
    product: productId ? products[0] : null,
  };
};

export default useProducts;
