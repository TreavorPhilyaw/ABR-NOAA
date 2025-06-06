import { useNOAAData } from '../hooks/useNOAAData';
import './Home.css';
import Card from '../components/Card';

const Home = () => {
  const { regions, loading, error } = useNOAAData();

  return (
    <div>
      {loading && (
        <div className="loading-message">Loading data...</div>
      )}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}
      <div className="card-flex">
        {regions && Object.values(regions).sort((a, b) => a.region.localeCompare(b.region)).map((region) => (
          <Card
            key={region.slug}
            image={[{ src: region.regionImage, alt: region.region, title: region.region }]}
            header={region.region}
            subtext={`Average Calories - ${region.caloriesAvg} \n Average Fat - ${region.fatAvg} g`}
            link={`/region/${region.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 