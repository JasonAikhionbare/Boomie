import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

//followed tutorial for Animated text from: https://www.youtube.com/watch?v=mwZPCA6Du5A&t=287s

export default class TextAnimator extends React.Component {
    animatedValues = [];
    constructor(props){
        super(props);

            const textArr = props.content.trim().split(' ');
            textArr.forEach((_, i) => {
                this.animatedValues[i] = new Animated.Value(0);

            });
            this.textArr = textArr;
        }

        componentDidMount(){
            this.animated()
        }

        animated = (toValue = 1) => {
           const animations = this.textArr.map((_, i) => {
               return Animated.timing(this.animatedValues[i], {
                   toValue,
                   duration: this.props.duration
               })
           });

           Animated.stagger(this.props.duration / 5, animations).start(() => {

            //reverses animation to remove text
               setTimeout(() => this.animated(toValue === 0 ? 1 : 0), 1000);
               
               if(this.props.onFinish){
                   this.props.onFinish();
               }
           });
        };

        render() {
            return (
                <View style={[this.props.style, styles.textWrapper]}>
                    {this.textArr.map((word, index) => {
                        return ( 
                            <Animated.Text key={`${word}-${index}`} style= {[this.props.textStyle, {
                                opacity: this.animatedValues[index],
                                 transform: [
                                     {
                                     translateY: Animated.multiply(
                                         thi .animatedValues[index],
                                         new Animated.Value(-15)
                                     )
                                 }
                                ]
                            }
                            ]
                        }
                        >
                                {word}
                                {`$index < this.textArr.length ? ' ' : ''}`}
                            </Animated.Text>
                        );
                    })}
                </View>
            );
        }
    }
