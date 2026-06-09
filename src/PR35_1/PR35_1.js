import useSWR from "swr";
import axios from "axios";
import "./styles.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function App() {
  const { data: bulbasaur, error } = useSWR("https://pokeapi.co/api/v2/pokemon/1", fetcher);

  if (error) return <div>Gagal memuat data.</div>;
  if (!bulbasaur) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Halo, Selamat Datang di Jayjay API</h1>
      <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
      <hr />
      <h1 style={{ textTransform: "capitalize" }}>{bulbasaur.name}</h1>
      <img
        src={bulbasaur.sprites?.other["official-artwork"].front_default}
        alt={bulbasaur.name}
      />
    </div>
  );
}