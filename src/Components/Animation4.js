import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation4 extends Component {
    state={
        animation: new Animated.Value(0)
    }
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:300,
            duration:350
        }).start()
    }
    
  render() {
      const animatedStyle={
top: this.state.animation,
right:this.state.animation,


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