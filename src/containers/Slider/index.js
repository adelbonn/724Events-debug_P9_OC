import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
 // const byDateDesc = data?.focus? [...data.focus].sort((evtA, evtB) =>  // ajout de? sur focus pour s'arrure que lélément a bien le focus
   // new Date(evtA.date) > new Date(evtB.date) ? -1 : 1 // correction de la pagination, la n'est pas triée de la plus récente à la plus ancienne le signe <  a été remplacé par le sign >
 //  );

 // Créer une copie triée (sort)du tableau pour éviter la mutation du tableau original
  const byDateDesc = data?.focus ? [...data.focus].sort((evtA, evtB) => {
  const dateA = new Date(evtA.date);
  const dateB = new Date(evtB.date);
 return dateB - dateA; // Tri décroissant
 }) : [];

 // Réinitialiser l'index si on dépasse la longueur du tableau
 useEffect(() => {
  if (byDateDesc.length && index >= byDateDesc.length) {
    setIndex(0);
  }
}, [byDateDesc.length, index]);

useEffect(() => {
  // Gérer le défilement automatique
  const timer = setTimeout(() => {
    setIndex((prevIndex) => 
      prevIndex < (byDateDesc.length - 1) ? prevIndex + 1 : 0
    );
  }, 5000);

  // Nettoyer le timer quand le composant est démonté
  return () => clearTimeout(timer);
}, [index, byDateDesc.length]);

if (!data ||!data.focus || byDateDesc.length === 0) {
  return <div>Chargement...</div>;
}
  // const nextCard = () => {
  //   setTimeout(
  //     () => setIndex(index < byDateDesc.length ? index + 1 : 0), 
  //     5000
  //   );
  // };
  // useEffect(() => {
  //   nextCard();
  // });
  return (
    <div className="SlideCardList">
      {byDateDesc.map((event, idx) => (
          <div
            key={event.id}
            className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
            ))}
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((dot, radioIdx) => (
                <input
                  key={dot.id}
                  type="radio"
                  name="radio-button"
                
                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)} // Mettre à jour l'index lors du changement
                />
                
              ))}
            </div>
          </div>
        </div>
  );
};

export default Slider;
