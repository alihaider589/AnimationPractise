import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation1 extends Component {
    state={
        animation: new Animated.Value(0)
    }
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:1500
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:3,
                duration:1500
            }).start(()=>{
                Animated.timing(this.state.animation,{
                    toValue:2,
                    duration:1500
                }).start(()=>{
                    Animated.timing(this.state.animation,{
                        toValue:3,
                        duration:1500
                    })
                })
            })
        })
    }
    
  render() {
    const Rotateinterpolation=
    this.state.animation.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })
    const animatedstyle = {
        transform:[
            {
                rotate:Rotateinterpolation
            }
        ]
    }


     const Boxinterpolation =
         this.state.animation.interpolate({
             inputRange:[0,1,2,3],
             outputRange:['rgb(79, 114, 164)','rgb(77, 232, 118)','rgb(230, 27, 96)','rgb(255, 205, 66)']
         })
         const boxAnimatedStyle ={
             backgroundColor:Boxinterpolation
         }
     
    return (
      <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
      <Animated.View style={[styles.box,boxAnimatedStyle,animatedstyle]}/>
      </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    box:{

        width:150,
        height:150,
        backgroundColor:"red"
    },
    Container:{
        backgroundColor:'rgb(0,0,0)',
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})