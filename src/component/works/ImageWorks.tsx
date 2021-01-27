import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styleWorks from '../../styles/works.component.style';


export interface bigData {
    data : {
        urlVideo :string,
        titleImage:string,
        urlImage:string,
    }
}

type imageWorksProps = {
    data : {
        dataWorksImage : {
            urlVideo :string,
            titleImage:string,
            urlImage:number,
            tagImage:string,
        }
        id:number,
    },
    handleClickMovie : (urlVideo:string, titleImage:string)=> void
}

const ImageWorks = ({data,handleClickMovie }: imageWorksProps)=> {
   

    return(
        <View style={styleWorks.containImage}>
            <TouchableOpacity onPress={(e)=>handleClickMovie(data.dataWorksImage.urlVideo, data.dataWorksImage.titleImage)}>
                <Image  style={styleWorks.imagePicture} source={data.dataWorksImage.urlImage} />
                <View style={styleWorks.titleImage}>
                    <Text>
                        {data.dataWorksImage.titleImage}
                    </Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}

export default ImageWorks