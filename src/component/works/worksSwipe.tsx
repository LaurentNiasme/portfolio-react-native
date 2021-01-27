import React, {useState, SyntheticEvent } from 'react';
import {View, Text, Image, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import styleWorks from '../../styles/works.component.style';

interface EventHandler<E extends SyntheticEvent> {
    (event: E): void;
}
// interface UIEventHandler extends EventHandler<UIEvent> {}

const worksSwipe = () => {
    const {width} = Dimensions.get('window');
    const height = width*100/100
    const images = [
        'https://images.pexels.com/photos/2124774/pexels-photo-2124774.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1458736/pexels-photo-1458736.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/4913340/pexels-photo-4913340.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/5806972/pexels-photo-5806972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/6058889/pexels-photo-6058889.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/4674373/pexels-photo-4674373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1229087/pexels-photo-1229087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

    ]

    const [numSlice, setNumSlice]= useState(0)

    const scrollImage = (e:NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(e.nativeEvent.contentOffset.x/ e.nativeEvent.layoutMeasurement.width)
        if(slide !== numSlice){
            setNumSlice(slide)
        }
    }
    return(
        <View style= {[styleWorks.swipeContain, {width, height}]}>
              <ScrollView 
              pagingEnabled 
              onScroll={scrollImage}
              horizontal 
              showsHorizontalScrollIndicator={false}
              style= {[styleWorks.scrollViewImage,{ width, height}]}>
                {images.map((image, i)=>{
                    
                    return (
                        <Image
                        key= {i}
                        source= {{uri:image}}
                        style= {[styleWorks.swipeImage,{width, height}]}/>
                    )
                })}
              </ScrollView>
              <View style ={styleWorks.pucePageContain}>
                  {images.map((i,k)=>(
                    <Text key={k} style = {k== numSlice ? styleWorks.pucePageActive : styleWorks.pucePageNoActive}>
                    ⬤
                    </Text>
                  ))}
              </View>
        </View>
    )
}

export default worksSwipe