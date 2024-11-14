import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';
function ListPage(){
    const data = listData
    return (
        <div className="listPage">
            <div className = "listContainer">
                <div className='wrapper'>
                    <div>
                      <Filter/>  
                    </div>
                </div>
            </div>
            <div className = "mapContainer">Map</div>
        </div>
    )
}

export default ListPage