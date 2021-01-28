import React, {useState, SyntheticEvent } from 'react';
import {View, Text, Image, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import styleWorks from '../../styles/works.component.style';

interface EventHandler<E extends SyntheticEvent> {
    (event: E): void;
}
// interface UIEventHandler extends EventHandler<UIEvent> {}

type worksSwipeProps = {
    data : {
        dataWorksImage : {
            urlVideo :string,
            titleImage:string,
            urlImage:number,
            tagImage:string,
            imageCarrousel:number[],
            description:string
        },
        id:number,
    },
}
const worksSwipe = ({data}:worksSwipeProps) => {
    const {width} = Dimensions.get('window');
    const height = width*70/100
    const images = [
        ''

    ]

    const [numSlice, setNumSlice]= useState(0)

    const scrollImage = (e:NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(e.nativeEvent.contentOffset.x/ e.nativeEvent.layoutMeasurement.width)
        if(slide !== numSlice){
            setNumSlice(slide)
        }
    }
    return(
        <View style= {[styleWorks.swipeContain]}>
            <View style={styleWorks.ctTitle}>
                <Text style={styleWorks.textTitle} >
                    {data.dataWorksImage.titleImage}
                </Text>
            </View>
              <ScrollView 
                pagingEnabled 
                onScroll={scrollImage}
                horizontal 
                showsHorizontalScrollIndicator={false}
                style= {[styleWorks.scrollViewImage]}>

                    {data.dataWorksImage.imageCarrousel.map((image, i)=>{
                        return (
                            <Image
                            key= {i}
                            source= {image}
                            style= {[styleWorks.swipeImage, {width, height}]}/>
                        )
                    })}
                    
              </ScrollView>
              <View style ={styleWorks.pucePageContain}>
                  {data.dataWorksImage.imageCarrousel.map((i,k)=>(
                    <Text key={k} style = {k== numSlice ? styleWorks.pucePageActive : styleWorks.pucePageNoActive}>
                    ⬤
                    </Text>
                  ))}
              </View>
              <View style = {styleWorks.ctDescription}>
                  <Text style = {styleWorks.textDescription}>
                      {data.dataWorksImage.description}
                  </Text>
              </View>
        </View>
    )
}

export default worksSwipe