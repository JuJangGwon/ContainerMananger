import { useEffect, useState } from "react";
import ContainInform from "./temp";
import ContainerEdit from "../../pages/ContainerEdit";
import { createPortal } from "react-dom";

const API_KEY = `bcbdfa59044cfeccb52e0368849db80b`;

export default function Contain() {
  const onContainerClick = () => {
    console.log("#");
    setOpenModal(true);
  }
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [movies, setMove] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMove(results);
    })();
  }, []);
  return (
    <div className="container">
      {movies?.map((movie) =>
      (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={onContainerClick} />
          {openModal && <ContainerEdit setOpenEdit={setOpenEdit} />
          }
          <h4>{movie.original_title}</h4>
        </div>))}
      <style jsx>{`
        .container {
          display: grid;
          grid : '. . . .';
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          width : 200px;
          height : 150px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>

    </div>
  )
}