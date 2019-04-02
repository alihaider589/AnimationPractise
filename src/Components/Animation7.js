import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation1 extends Component {
    state={
        animation: new Animated.Value(0)
    }
    handlepress=()=>{
      Animated.spring(this.state.animation,{
        toValue:5,
        tension:300,
        friction:2
      }).start()
    }
    
  render() {
    const animatedScale={
      transform:[{
          scale:this.state.animation
      }]
  }
    return (
      <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={this.handlepress} >
      <Animated.View  style={[styles.box,animatedScale]}/>
      </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    box:{

        width:50,
        height:50,
        backgroundColor:"red"
    },
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})