import { MoreHoriz, PlayCircleOutline } from "@mui/icons-material"
import "./Featured.scss"
import { useEffect, useState } from "react"
import axios from "axios"


const Featured = ({type}) => { // use of props
  const [content,setContent] = useState({})
  useEffect(()=>{
    const getRandomContent = async ()=>{
      try{
        const res = await axios.get(`/movies/random?type=${type}` , {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQwZTNmMmYyMDZjZmIzMTBmNmQ1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDY4NTU2OSwiZXhwIjoxNzA1MTE3NTY5fQ.pV4ym5VXRy_lXm4LPSqxTrMmhYMteA7X5kwOQxe_Uyw"
          }
        })
        setContent(res.data[0])
      }catch(err){
        console.log(err)
      }
    }
    getRandomContent();
  },[type])
  
  return (
    <div className="featured">
      {type && ( // matlb if I am on featured of movie or series I also get to see their titles and genre to select (Home me ni h aisa)
        <div className="category">
            <span> {type === "movies"? "Movie" : "Series"}</span>

            <select name="genre" id="genre">
              <option value="">Genre</option>
              <option value="RomCom">RomCom</option>
              <option value="Action">Action</option>
              <option value="Thriller">Thriller</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
            </select>
        </div>
      )}
        <img src={content.img} alt=""/>


      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">
        It takes a will of steel to hide your superhero talents from a world that still needs you, yet no longer appreciates what you can do. 
        </span>

        <div className="buttons">
          <button className="play"> 
              <PlayCircleOutline></PlayCircleOutline>
              <span>Play</span>
          </button>

          <button className="more">
              <MoreHoriz ></MoreHoriz>
              <span>More</span>
          </button>
        </div>
      </div>
        
      
    </div>
  )
}

export default Featured