import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
  
}) => {

  // on s'assure que  la date passée à EventCard.js est bien un objet Date (avec instanceof) avant d'appeler la fonction getMonth()
const eventDate = date instanceof Date ? date : new Date(date); // // enlever cette ligne car pas besoin on demande en fait de verifier que la date est une date et aussi une string et plus bas il est dit que ce doit etre une string

  return (
    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
       <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
       {/* permet d'afficher notre mois avec getMonths() */}
        <div className="EventCard__month">{getMonth(eventDate)}</div> 
      </div>
    </div>
  );
};
EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
}

export default EventCard;
