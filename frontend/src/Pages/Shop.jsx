import { useEffect, useState } from "react";
import { HopCard } from "../Components/HopCard";
import axios from 'axios';
import './shop.css'

export const Shop = () => {
  const [hops, setHops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:5050/hops/getAll";

  useEffect(() => {
    const fetchHops = async () => {
      try {
        const response = await axios.get(apiUrl); 
        setHops(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHops();
  }, []);

  console.log( 'hops >', hops)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Hops</h1>
      <div className="wrapper">
        {hops.map((hop, index) => (
          <div key={index}>
            <HopCard name={hop.name} price={'$11.90'}/>
          </div>
        ))}
      </div>
    </div>
  );
}
