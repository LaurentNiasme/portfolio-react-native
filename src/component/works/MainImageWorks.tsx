import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ImageWorks from './ImageWorks';
import styleWorks from '../../styles/works.component.style';
import WorksSwipe from './worksSwipe';

export interface dataVideo {
    urlVideo : string,
    titleImage : string,
}

type MainImageWorksProps = {
    dataWorks : {
        dataWorksImage : {
            urlVideo :string,
            titleImage:string,
            urlImage:number,
            tagImage:string,
        }
        id:number,
    }[],
    selectedWorks: number,
    launchVideo : (launch : boolean, urlVideo:string, titleImage:string)=>void
}

const MainImageWorks = ({dataWorks, selectedWorks, launchVideo} : MainImageWorksProps) => {

    const handleClickMovie =(urlVideo:string, titleImage:string)=> {
        console.log("show video")

        launchVideo(true,urlVideo, titleImage )
       
        
         
     }
     
     const createImageWorks = () => {
     
         return(
             <View style={styleWorks.containAllImage}>
               

                    {dataWorks.map(works=>{
        
                        return(
                                // <ImageWorks data={works} handleClickMovie={handleClickMovie}  />
                                <WorksSwipe/>
                              
                        
                        )
                    })}
                
                 
                 
             </View>
         )
     }

    return (
        <View>
            {createImageWorks()}
            
        </View>
    )
}

export default MainImageWorks