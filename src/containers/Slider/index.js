import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);


 // Créer une copie triée (sort)du tableau pour éviter la mutation du tableau original. Utilisation de spread (...data.focus) pour copier le tableau, création d'une nouvelle copie pour éviter les mutations.
  const byDateDesc = data?.focus ? [...data.focus].sort((evtA, evtB) => {
  const dateA = new Date(evtA.date);
  const dateB = new Date(evtB.date);
 return dateA - dateB; // Tri décroissant
 }) : [];
// Puis on a deux useeffect hook qui gère le défilement automatique et la gestion des slides blancs.
 // Réinitialiser l'index si on dépasse la longueur du tableau (évite le bug du slide blanc)
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
  return (
    <div className="SlideCardList">
      {byDateDesc.map((event, idx) => (
          <div
            key={event.id}
            className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
            }`}
          >  
            <img src={event.cover} alt={event.title} /> 
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
                  key={dot.id}  // utilisation de dot.id comme key, il n'y avait pas de key unique comme React recommande
                  className="SlideCard__paginationDot"
                  type="radio"
                  name="radio-button"

                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)} // Met à jour l'index lors du changement, ajout du gestionnaire d'événments onChange
                />
                
              ))}
            </div>
          </div>
        </div>
  );
};

export default Slider;
