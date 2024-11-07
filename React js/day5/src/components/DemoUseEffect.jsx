import React, { useEffect, useState } from 'react';
import ApiService from "../service/apiService";

export const DemoUseEffect = () => {
  const [count, setCount] = useState(1); // Fix: useState instead of userState
  const [dataPhoto, setDataPhoto] = useState([]);

  // Function to load photos using the ApiService
  const loadDataPhoto = async () => {
    try {
      const res = await ApiService.apiGetListPhoto();
      console.log(res, "Photos fetched");
      if (res.status === 200) {
        setDataPhoto(res.data.slice(0, 10)); // Only display the first 10 photos for simplicity
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  // useEffect to load photos when the component mounts
  useEffect(() => {
    loadDataPhoto();
  }, []);

  // useEffect to log count updates
  useEffect(() => {
    console.log("render", count);
  }, [count]);

  return (
    <div>
      <h2>Demo of useEffect Hook</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Photo List:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {dataPhoto.map(photo => (
            <div key={photo.id} style={{ width: '150px', textAlign: 'center' }}>
              <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%' }} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
