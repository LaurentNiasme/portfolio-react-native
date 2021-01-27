import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styleWorks from '../../styles/works.component.style';

type videoWorksProps = {
    launchVideo : (launchingVideo:boolean, urlVideo:string|null, titleImage:string|null)=> void,
    urlVideo : string|null,
    titleVideo : string|null,
}

const VideoWorks =({launchVideo, urlVideo, titleVideo} : videoWorksProps) => {

    return(
        <View>
            <Text >{titleVideo}</Text>
            {/* <Button style={styleWorks.btnVideo}  onClick={(e)=>launchVideo(false, urlVideo, titleVideo)}>Fermer</Button> */}
            <View style={styleWorks.btnVideo}>
                <TouchableOpacity onPress={(e)=>launchVideo(false, urlVideo, titleVideo)}  >
                    <Text >
                       Fermer
                    </Text>
                </TouchableOpacity>
                    

            
            </View>
            <View style={styleWorks.playerWrapper}>
                <Text >
               
                    {titleVideo}
                    {urlVideo}
                </Text>
                {/* <iframe className={styleWorks.iframeVideo}
                src={urlVideo}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

                </iframe> */}
            </View>
        </View>
    )
}

export default VideoWorks