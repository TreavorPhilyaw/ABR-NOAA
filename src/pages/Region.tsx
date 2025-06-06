import { useParams } from 'react-router-dom';
import './Region.css';
import { useNOAAData } from '../hooks/useNOAAData';
import Card from '../components/Card';

const Region = () => {
    const { regionId } = useParams();
    const { regions } = useNOAAData();

    return (
        <>
            {regions && regionId && regions[regionId] ? (
                <div>
                    <div className="region-header">
                        <div>
                            <h1>{regions[regionId].region}</h1>
                            <h3>Average Calories - {regions[regionId].caloriesAvg}</h3>
                            <h3>Average Fat - {regions[regionId].fatAvg} g</h3>
                        </div>

                    </div>
                    <div className="card-flex">
                        {regions[regionId].data?.map((item) => (
                            <Card
                                key={item.name}
                                image={item.images ? item.images : []}
                                header={item.name}
                                subtext={`Calories - ${item.calories} \n Fat - ${item.fat} g \n ${item.description}`}
                            />
                        ))}
                    </div>
                </div>
            ) : <div>Region not found</div>
            }
        </>
    );
};

export default Region;
