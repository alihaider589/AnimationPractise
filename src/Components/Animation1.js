import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation1 extends Component {
    state={
        animation: new Animated.Value(1)
    }
    
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:0,
            duration:350
        }).start();
    }
  render() {
      const animatedStyle={
        opacity:this.state.animation
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

        width:150,
        height:150,
        backgroundColor:"red"
    },
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})