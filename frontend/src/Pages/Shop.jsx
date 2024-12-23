import { useEffect, useState } from "react";
import { HopCard } from "../Components/HopCard";
import axios from "axios";
import "./shop.css";
import { HopFilter } from "../Components/HopFilter";

export const Shop = () => {
  const [hops, setHops] = useState([]);
  const [filteredHops, setFilteredHops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHops = async () => {
      try {
        const response = await axios.get("http://localhost:5050/hops/getAll");
        setHops(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHops();
  }, []);

  const handleFilterClick = async (filter, filterValue) => {
    console.log(filter);
    
    const fetchFilteredHops = async () => {
      try {
        //const response = await axios.get(`http://localhost:5050/hops/filter?filter=${filter}filterValue=${filterValue}`);
        //setFilteredHops(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
  }

  await fetchFilteredHops();
}
  

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error}</span>;

  return (
    <div>
      <div className="main-wrapper">
        <HopFilter filterHops={ hops } handleFilterClick={handleFilterClick}/>
        {filteredHops ? 
          (<div className="wrapper">
            {filteredHops.map((hop, index) =>
              <div key={index} className="hopCard">
                  <HopCard name={hop.name} price={"$11.90"} />
                </div> )
            }
          </div>) :
          (<div className="wrapper">
            {hops.map((hop, index) =>
              <div key={index} className="hopCard">
                  <HopCard name={hop.name} price={"$11.90"} />
                </div> )
            }
          </div>)
        }
      </div>
    </div>
  );
};
