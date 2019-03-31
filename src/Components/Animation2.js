import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated ,StyleSheet} from 'react-native'

export default class Animation2 extends Component {
    state={
        animation: new Animated.Value(1),
        scale : new Animated.Value(1)
    }
    
    startScale=()=>{
        Animated.timing(this.state.scale,{
            toValue:2,
            duration:350
        }).start(()=>
        {
            Animated.timing(this.state.animation,{
                toValue:-2,
                duration:350
            }).start();
        })
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:300,
            duration:350
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:-300,
                duration:350
            }).start(()=>{
                Animated.timing(this.state.animation,{
                    toValue:300,
                    duration:350
                }).start(()=>{
                    Animated.timing(this.state.animation,{
                        toValue:0,
                        duration:350
                    })
                });
            });
        });
    }
  render() {
      const animatedStyle={
          transform:[{
              translateY:this.state.animation,
              
          },{
              translateX:this.state.animation
          },
        {
            translateY:this.state.animation
        }]
      }
      const animatedScale={
          transform:[{
              scale:this.state.scale
          }]
      }
    return (
      <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={this.startAnimation} >
      <Animated.View  style={[styles.box,animatedStyle]}/>

      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={this.startScale} >
      <Animated.View  style={[styles.box,animatedScale]}/>

      </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    box:{

        width:150,
        height:150,
        backgroundColor:"red",
        margin:20
    },
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})