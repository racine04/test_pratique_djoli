import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DatePicker, InputNumber, Button } from 'antd';
import dayjs from 'dayjs';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

interface NewPrice {
  date: string;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const storageKey = `prices_${slug}`;
  
  const [prices, setPrices] = useState<NewPrice[]>([]);
  const [date, setDate] = useState<any>(null);
  const [price, setPrice] = useState<number | null>(null);

  //Chargement des donnees du localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setPrices(JSON.parse(saved));
      } catch (err) {
        console.error("Erreur de parsing des données du localStorage", err);
      }
    }
  }, [storageKey]);

  // Enregistrement des données dans le localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(prices));
  }, [prices, storageKey]);

  const handleAddPrice = () => {
    if (date && price != null) {
      const newEntry: NewPrice = { date: date.toISOString(), price };
      setPrices(prev => [...prev, newEntry]);
      setDate(null);
      setPrice(null);
    }
  };

  const chartData = prices.map(p => ({
    date: dayjs(p.date).format("DD/MM/YYYY"),
    price: p.price,
  }));

  return (
    <div>
      <h2>Ajouter un prix pour : {slug}</h2>

      <div style={{ marginBottom: 20 }}>
        <DatePicker value={date} onChange={d => setDate(d)} />
        <InputNumber
          value={price ?? undefined}
          onChange={v => setPrice(v)}
          style={{ marginLeft: 10 }}
          placeholder="Prix"
        />
        <Button type="primary" onClick={handleAddPrice} style={{ marginLeft: 10 }}>
          Ajouter
        </Button>
      </div>

      <h3>Historique des prix :</h3>
      <ul>
        {prices.map((p, i) => (
          <li key={i}>
            {dayjs(p.date).format("DD/MM/YYYY")} - {p.price} FCFA
          </li>
        ))}
      </ul>

      {chartData.length > 0 && (
        <>
          <h3>Évolution des prix</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#009640" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
