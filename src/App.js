import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
// import SearchHistory from './components/SearchHistory/SearchHistory';
// import SearchResults from './components/SearchResults/SearchResults';
import { useState, useEffect } from 'react';
import OECTList from './components/OECTList/OECTList';
import * as Realm from 'realm-web';

export default function App() {
  const name = "OECT Database";
  const [term, setTerm] = useState("");
  // const [films, setFilms] = useState([]);
  const [students, setStudents] = useState([]);


  // function addTerm(term) {
  //   setTerms([term]);
  //   // setTerms([term, ...terms]);
  //   // fetchData(term)
  // }

  useEffect(() => {
    console.log("Initial render")
    fetchData();
  }, []);

  async function fetchData(){
    // let url= `https://swapi.dev/api/${type}`;
    // let resp = await fetch(url);
    // if(!resp.ok) throw new Error(resp.statusText);
    // let data = await resp.json();
    // setFilms(data.results);

    //OECT List
    console.log("Second render")
    const app = new Realm.App({id: "oect_database-lvdtv"});
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allStudents = await user.functions.searchStudent();
      console.log("Searching student...")
      setStudents(allStudents);
      console.log("Is this running?")
  } catch (error) {
      console.error(error);
  }
}


  return (
    <>
    <div className='App'>
      <Header db={name}/> 
      <SearchBar term={term} setTerm={setTerm} />
      {/* <SearchHistory terms={terms} />
      <SearchResults films={films} /> */}
      <OECTList students={students} />
    </div>
    </>
  );
}
