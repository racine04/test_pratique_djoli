import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Input, Row, Spin, message } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  img: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/api/v1/rest/mobile/catalog/products-standards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des produits');
        }
        return response.json();
      })
      .then(data => {
        const items = Array.isArray(data.data?.data) ? data.data.data : [];
        setProducts(items);
        setFilteredProducts(items); // initialiser avec tout
      })
      .catch(error => {
        console.error('Erreur:', error);
        message.error("Impossible de récupérer les produits.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Elements a rechercher
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.slug.toLowerCase().includes(value.toLowerCase()) ||
      product.price.toString().includes(value)
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return <Spin tip="Chargement des produits..." fullscreen />;
  }

  return (
    <>
      <Search
        placeholder="Rechercher un produit..."
        allowClear
        enterButton="Rechercher"
        size="large"
        onSearch={handleSearch}
        style={{ marginBottom: 24 }}
      />

      <Row gutter={[16, 16]}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card title={product.name} bordered>
                <img src={product.img} alt="image_product" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <p><strong>Code :</strong> {product.slug}</p>
                <Link to={`/add_product/${product.slug}`}>
                  <Button type="primary">Ajouter un prix</Button>
                </Link>
              </Card>
            </Col>
          ))
        ) : (
          <p>Aucun produit trouvé pour "{searchTerm}"</p>
        )}
      </Row>
    </>
  );
};

export default ProductList;
