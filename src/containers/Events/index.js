import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState();
  const [currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
  console.log("🔍 Current filter type:", type);
  console.log("📊 Available events:", data?.events);
}, [type, data]);

if (error) {
  return <div>An error occured</div>;
}
  

const filteredEvents = (data?.events || [])
.filter((event) => {
  // Filtre par type si un type est sélectionné
  const matchesType = !type || event.type === type;
  console.log(`Event "${event.title}":`, {
    eventType: event.type,
    selectedType: type,
    matches: matchesType
  });
  return matchesType;
})
  // 2. Ajout de la pagination (ajout de filter sur le tableau des événements)
  .filter((_, index) => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return index >= start && index < end;
  });
  
  
  const changeType = (evtType) => {
    console.log('Type change:', {
      from: type,
      to: evtType
    });

    setCurrentPage(1);  // Reset pagination qd le type changes
    setType(evtType);
  };
  const pageNumber = Math.floor((filteredEvents?.length || 0) / PER_PAGE) + 1;
  const typeList = new Set(data?.events.map((event) => event.type));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {filteredEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber || 0)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
