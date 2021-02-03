import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styleWorks from '../../styles/works.component.style';
import MainImageWorks from './MainImageWorks';
import VideoWorks from './VideoWorks';
import dataWorks from './dataWorks'
import ButonWorks from '../buton/ButonWorks';
import MainGlobal from '../global/MainGlobal';


export interface iWorksData  {
    dataWorksImage : {
        urlVideo :string,
        titleImage:string,
        urlImage:number,
        tagImage:string,
        imageCarrousel:number[],
        description:string
    },
    id:number,
}

const MainWorks = () => {
        // Consantte la video doit être montrée, l'id du travaille qui est sélectionné
    // Quel catégorie de domaine est sélectionné. Quel titre et urlVideo est sélectionné
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [selectedWorks, setSelectedWorks] = useState<number>(0);
    const [nameDomainWorks, setNameDomainWorks] = useState<string>('Programmeur web front');
    const [urlVideo, setUrlVideo] = useState<string | null>(null);
    const [titleVideo, setTitleVideo] = useState<string|null>(null);
    const [worksDataVideo, setWorksDataVideo] = useState<iWorksData[]>(dataWorks)

    // On montre la vidéo grace à un appel de la fonction venant du composant MainImageWorks
    const launchVideo = (launchingVideo:boolean, urlVideo:string|null, titleImage:string|null) => {
        setUrlVideo(urlVideo)
        setTitleVideo(titleImage)
        setShowVideo(launchingVideo)
        createShow()
    };
    // On sélectionne un domaine de travail
    const handleClick = async (id:number, name:string) =>{
        setSelectedWorks(id);
        setNameDomainWorks(name);
        setShowVideo(false);
        createShow()
    };

    const createShow = ()=> {
       
         const data =  dataWorks.filter(works=>works.id===selectedWorks)
        //  setWorksDataVideo ( data)
   
        return (
            <View>
                 {showVideo ? <VideoWorks launchVideo={launchVideo}  urlVideo={urlVideo} titleVideo={titleVideo} /> : <MainImageWorks dataWorks={data} launchVideo={launchVideo} selectedWorks={selectedWorks} />}
            </View>
        )
    }

    return(

        <MainGlobal>

            <View >
            
                {/* barre de navigation */}
            <View style={styleWorks.navBarWorks}>
                <ButonWorks 
                name={"Développeur web front"} 
                idBtn={0} 
                handleClick={handleClick} 
                /> 

                <ButonWorks 
                name={"3d interactive"} 
                idBtn={1} 
                handleClick={handleClick} 
                />
            </View>
            <View  style={styleWorks.titleDomainWorks}>
                    <Text style={styleWorks.txtTitleDomainWorks}>
                        {nameDomainWorks}
                    </Text>
            </View>
                {/* on montre la video ou on montre les icones de travail */}
                {createShow()}
               
            
            </View>
           </MainGlobal>
    )
}

export default MainWorks