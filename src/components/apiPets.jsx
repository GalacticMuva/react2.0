import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; 

export const ApiPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {

        const { data, error } = await supabase
        .from('apiPets') 
        .select('*');

      if (error) {
        console.error('Error fetching pets:', error.message);
      } else {
        setPets(data);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pet Database Gallery</h2>
      <div className="row">
        {pets.map((pet) => {
          
          //destructuring on 1 line 
          const { name, breed, image_url } = pet;

          return (
            <div className="col-md-4 mb-4" key={pet.id}>
              <div className="card h-100 shadow-sm border-0">

                <img 
                  src={image_url} 
                  className="card-img-top" 
                  alt={name} 
                  style={{ height: "250px", objectFit: "cover" }} 
                />
                <div className="card-body text-center bg-light">
                  <h5 className="card-title fw-bold text-primary">{name}</h5>
                  <p className="card-text text-muted small">{breed}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};