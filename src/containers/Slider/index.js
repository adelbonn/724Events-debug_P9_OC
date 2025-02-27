import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData(); // récupère les data depuis le contexte DataContext
  const [index, setIndex] = useState(0); // initialise l'index du slide à 0
 // const byDateDesc = data?.focus? [...data.focus].sort((evtA, evtB) =>  // ajout de? sur focus pour s'assurer que l'élément a bien le focus
   // new Date(evtA.date) > new Date(evtB.date) ? -1 : 1 // correction de la pagination, elle n'est pas triée de la plus récente à la plus ancienne, mais de la plus ancienne à la plus récente le signe <  a été remplacé par le sign >
 //  );

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
  // const nextCard = () => {
  //   setTimeout(
  //     () => setIndex(index < byDateDesc.length ? index + 1 : 0), 
  //     5000
  //   );
  // };
  // useEffect(() => {
  //   nextCard();
  // });

  // le return du composant SlideCardList contient tous les slides, leur pagination et leur gestion du défilement automatique. Le style est géré par le fichier style.scss.
  // each slid card contains an image, a description and a pagination dot et la pagination est gérée par un input de type radio pour chaque slide. Le slide est rendu invisible et affiché seulement si son index correspond au index actuel. Le slide actif est affiché avec la classe "display", les autres avec la classe "hide". Le changement d'index est géré par le handleChange du input radio. Le texte de la pagination est affiché avec la méthode getMonth de la librairie date-fns pour traduire le mois en français. 
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
