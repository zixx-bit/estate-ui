import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/card';
import Map from '../../components/map/Map';
function ListPage(){
    const data = listData
    return (
        <div className="listPage">
            <div className = "listContainer">
                <div className='wrapper'>
                     <Filter/>                   
                     {data.map(property=>(
                        <Card key={property.id} property={property}/>
                     ))}
                    {/* <Card/> */}
                    
                </div>
            </div>
            <div className = "mapContainer"><Map geoLocations = {data}/></div>
        </div>
    )
}

export default ListPage