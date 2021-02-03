import React, {useState} from 'react';
import {View, Text} from 'react-native';
import worksYears from './dataJob';
import ButonYearsJob from '../buton/ButonYearsJob';
import styleAbout from '../../styles/about.component.style';
import MainGlobal from '../global/MainGlobal';

type MainAboutProps = {
    years:string,
    handleClick : (e:MouseEvent, idBtn:number ) => void,
    idBtn : number,
}
export interface bigData {
    job:{
        puce:boolean | null,
        underYears:string,
        text:string[]
    }[],
    years:string,
  }

const MainAbout =()=> {
    const [idBtnSelected, setIdBtnSelected] = useState<number | null>(null)
    const [dataJob, setDataJob] = useState<bigData>(worksYears[0])

    const handleClick = (e:MouseEvent, idBtn:number, data:bigData) => {
       setIdBtnSelected(idBtn)
       setDataJob(data)
      
    }

    const createButon = (idBtn:number|null) => {
        return(
           <View style={styleAbout.mainYearsNavBar}>
                {
                worksYears.map((data,i)=> {
                    
                    if (idBtn===i){
                        return(
                            <ButonYearsJob years ={data.years} handleClick ={handleClick} idBtn ={i} data={data} style={[styleAbout.butonYearJob, styleAbout.buttonClickYearsSelected]} />
                        )
                    }else{
                        return(
                            <ButonYearsJob years ={data.years} handleClick ={handleClick} idBtn ={i} data={data} style={[styleAbout.butonYearJob, styleAbout.buttonNotSelected]} />
                        ) 
                    }
                })
                }
           </View>
        )
    }

    const createText =()=> {
        //Le texte venant des data est envoyé dans le rendu
        return(
            < >
                {
                    dataJob.job.map(data=> {
                        return(
                            <View style = {styleAbout.containAboutTextYears}> 
                                            <Text style={styleAbout.aboutText}>
                                                {data.text}
                                            </Text>
                                        </View>
                                    ) 
                                })
                            }
            </>
        )
    }

    return(
        <MainGlobal>
            <View style = {styleAbout.mainAbout}>
                <View>
                    <Text style={[styleAbout.aboutTitle, styleAbout.aboutText]} > A propos de moi</Text>
                </View>
                <View style={styleAbout.containAboutText}>
                    <Text style={styleAbout.aboutText}>
                        Suite à une reconversion professionnelle en tant que programmeur dans le développement web en front-end, à l’issue de ma formation, je me spécialise dans la technologie React Js, Redux toolkit.
                        {"\n"}
                        {"\n"}
                        Avant cette reconversion, j’étais graphiste 3D depuis 12 ans, puis
                        programmeur nodal/blueprint sur le logiciel Unreal Engine, grâce
                        auquel j’ai élaboré des logiciels ancrés dans un univers interactif.
                        {"\n"}
                        {"\n"}
                        Ces différentes expériences dans la programmation d’applications en réalité virtuelle, m’ont permis d’acquérir de solides connaissances
                        dans plusieurs domaines de la production, tout en développant ma curiosité à rechercher de nouvelles technologies, à apprendre en autodidacte
                        et mon ambition pour évoluer.
                    </Text>
                </View>
                    {createButon(idBtnSelected)}
                    {createText()}
            
            </View>
        </MainGlobal>
    )
}

export default MainAbout;