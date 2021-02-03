import React from 'react';
import {Text, View} from 'react-native';
import styleSkills from '../../styles/skills.component.style';
import MainGlobal from '../global/MainGlobal';


const MainSkills = () => {

    return (
        <MainGlobal>

            <View style={styleSkills.mainSkill}>
                <View>
                    <Text style={styleSkills.txtSkillTitle}> Expérience et compétence</Text>
                </View>
                <View style={styleSkills.containerText}>
                    <Text style={styleSkills.TxtSkill}>
                        Je me spécialise dans le front-end du développement web et son
                        dynamisme avec les technologies <Text style={styleSkills.boldText}> JS, REACTJs, NEXTJS, HTML, CSS.</Text> 
                        {"\n"}
                        {"\n"}
                        Pour aller plus loin dans le front-end, j’utilise :
                        {"\n"}
                        <Text style={styleSkills.boldText}>Redux-toolkit</Text> donnant une simplicité pour transférer
                        les données entre les composant.
                        {"\n"}
                        <Text style={styleSkills.boldText}>SocketIo</Text> pour connecter les utilisateurs entre eux afin qu’ils
                        puissent communiquer en live.
                        {"\n"}
                        {"\n"}
                        J’ai également acquis une base en back-end avec <Text style={styleSkills.boldText}> Nodejs, Express, Data-mapper, postgres.</Text>
                        {"\n"}
                        {"\n"}
                        Mon ancienne profession de graphiste 3D et programmation nodale,
                        m’ont permit de matiriser les logiciels : 3dsmax, Photoshop, Unreal
                        Engine
                    </Text>
                </View>
            </View>
        </MainGlobal>
    )
}

export default MainSkills