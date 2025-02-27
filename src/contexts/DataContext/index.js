import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {

console.log('🔄 DataProvider initialized');

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  const [last, setLast] = useState(null); // Ajout d'un état pour last pour le timestamp
  
  const getData = useCallback(async () => {
    console.log('📡 Fetching data...');
    try {
      const result = await api.loadData();
      console.log('✅ Data fetched successfully:', result);
      setData(result);
      setLast(Date.now()); // Mise à jour de 'last' quand les données sont chargées
    } catch (err) {
      console.error('❌ Error fetching data:', err);
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (data) return;
    console.log('⚡ useEffect triggered, data:', data);
    getData();
  }, [data, getData]); // Récupère les données à chaque rafraichissement
    // Log state changes
    useEffect(() => {
      console.log('📊 DataContext state updated:', {
        hasData: !!data,
        hasError: !!error,
        last
      });
    }, [data, error, last]);
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
        last   // Ajout de la date last
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);

export default DataContext;
