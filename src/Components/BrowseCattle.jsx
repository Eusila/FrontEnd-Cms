const BrowseCattle = ({ setSelectedCattle }) => {
    const [cattleList, setCattleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchCattle = async () => {
        try {
          const response = await axios.get('https://mock-api.com/cattle');
          setCattleList(response.data);
        } catch (err) {
          setError('Failed to load cattle listings.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCattle();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
  
    // Render cattle listings as before
  };
  