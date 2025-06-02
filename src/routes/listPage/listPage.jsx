import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/card';
import Gmap from '../../components/GoogleMap/Gmap';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
function ListPage(){
    // const data = listData
    const posts = useLoaderData()
    return (
        <div className="listPage">
            <div className = "listContainer">
                <div className='wrapper'>
                     <Filter/>       
                     <Suspense fallback={<p>Loading...</p>}>
                     <Await
                     resolve={posts.postResponse}
                     errorElement={<p>Error loading posts</p>}
                     >
                     {(postResponse)=> postResponse.data.map(property=>(
                        <Card key={property.id} property={property}/>
                     ))}
                         </Await>
                     {/* {posts.map(property=>(
                        <Card key={property.id} property={property}/>
                     ))} */}
                     </Suspense>            
                    
                    {/* <Card/> */}
                    
                </div>
            </div>
            <div className="mapContainer">
            <Suspense fallback={<p>Loading...</p>}>
                     <Await
                     resolve={posts.postResponse}
                     errorElement={<p>Error loading map</p>}
                     >
                        {(postResponse)=> <Map propertyData={postResponse.data}/>
                     }                  
                  
                         </Await>
                    
                     </Suspense>     
            {/* <Map propertyData={posts}/> */}
              {/* <Gmap data= {posts}/> */}
                {/* red color shades #E0115F */}
            {/* blue color shades #4682B4 */}   
            </div>
        </div>
           
           

)
    
}

export default ListPage