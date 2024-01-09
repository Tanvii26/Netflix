import "./Home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios"
/* Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data */

const Home = ({ type }) => {

  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
  // useEffect -> lets u sync a component with an external system
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQwZTNmMmYyMDZjZmIzMTBmNmQ1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDY4NTU2OSwiZXhwIjoxNzA1MTE3NTY5fQ.pV4ym5VXRy_lXm4LPSqxTrMmhYMteA7X5kwOQxe_Uyw"
          }
        })
        // console.log(res)
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      {lists.map((list) => (
        <List list={list}></List>
      ))}

    </div>
  );
};

export default Home;