import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation1 extends Component {
    state={
        animation: new Animated.Value(0)
    }
    
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:350
        }).start();
    }
  render() {
      const widthinterpolate=
          this.state.animation.interpolate({
              inputRange:[0,1],
              outputRange:["20%","50%"]
          })
          
          const heightinterpolate=
          this.state.animation.interpolate({
              inputRange:[0,1],
              outputRange:["20%","30%"]
          })
          
      const animatedStyle={
        height:heightinterpolate,
        width:widthinterpolate
      }
    return (
      <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={this.startAnimation} >
      <Animated.View  style={[styles.box,animatedStyle]}/>
      </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    box:{

        backgroundColor:"red"
    },
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})