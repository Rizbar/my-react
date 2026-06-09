import React, { useState, useEffect } from "react";
// PERBAIKAN: Hapus ApolloProvider dari import ini
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Inisialisasi client tetap di luar komponen
const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export default function App() {
  const [bulbasaur, setBulbasaur] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    // Memperbaiki sintaks query agar sesuai dengan skema API
    const QUERY = gql`
      query getPokemon($name: String!) {
        pokemon(name: $name) {
          name
          image
        }
      }
    `;

    // Memanggil client.query secara langsung
    client
      .query({ 
        query: QUERY, 
        variables: { name: "Bulbasaur" } // Ingat: 'B' harus kapital
      })
      .then((result) => {
        if (result.data && result.data.pokemon) {
          setBulbasaur(result.data.pokemon);
          setError(null);
        } else {
          setError("Data tidak ditemukan");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Halo, Selamat Datang di Jayjay API</h1>
      <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
      <hr />
      <button onClick={fetchData} style={{ marginBottom: "20px" }}>
        Refresh
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {bulbasaur ? (
        <>
          <h1 style={{ textTransform: "capitalize" }}>{bulbasaur.name}</h1>
          <img
            src={bulbasaur.image}
            alt={bulbasaur.name}
            style={{ width: "200px", height: "200px" }}
          />
        </>
      ) : (
        !error && <p>Loading...</p>
      )}

      <p style={{ marginTop: "40px" }}>
        Ganti Fetch menjadi GraphQL API dengan Apollo{" "}
        <a
          href="https://graphql-pokemon2.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://graphql-pokemon2.vercel.app
        </a>
      </p>
    </div>
  );
}