import { useEffect, useState } from "react";
import { getRandomDimension } from "./assets/components/Random";
import axios from "axios";
import Location from "./assets/components/Location";
import ResidentList from "./assets/components/ResidentList";

function App() {
  const [Dimension, setDimension] = useState(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(url)
      .then(({ data }) => setDimension(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='overflow-x-hidden h-screen w-screen  '>
      <Location Dimension={Dimension} setLocation={setDimension} />
      <ResidentList residents={Dimension?.residents}  />
    </main>
  );
}

export default App;
