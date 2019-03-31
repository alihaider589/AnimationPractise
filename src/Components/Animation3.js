import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation3 extends Component {
    state={
        animation: new Animated.Value(150)
    }
    
startAnimation=()=>{
    Animated.timing(this.state.animation,{
        toValue:300,
        duration:350
    }).start(()=>{

        Animated.timing(this.state.animation,{
            toValue:150,
            duration:350
        }).start()
    })
}

  render() {
      const animatedStyle={
        width:this.state.animation,
        height:this.state.animation
      }
    return (
      <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={this.startAnimation} >
      <Animated.View  style={[styles.box,animatedStyle]}>
      <Text style={{fontSize:100}}>Hello World </Text>
      </Animated.View>
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