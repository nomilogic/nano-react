import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
} from 'react-native';

class Policies extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        buttonTitle:'POLICIES',
        modalVisible: false,
        data : [
            {
                key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                itemName: 'Advertising Policy',
                itemPage:'SignupScreen',
            },
            {
                key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                itemName: 'Online Child Protection',
                itemPage:'SignupScreen',
            },
            {
                key: '58694a0f-3da1-471f-bd96-145571e29d72',
                itemName: 'Cookie Policy',
                itemPage:'SignupScreen',
            },
            {
                key: '58694a0f-3da1-471f-bd96-145571e29d89',
                itemName: 'Data Policy',
                itemPage:'SignupScreen',
            },
            {
                key: '58694a0f-3da1-471f-bd96-145571e29d99',
                itemName: 'Privacy Principles',
                itemPage:'SignupScreen',
            },
            {
                key: '58694a0f-3da1-471f-bd96-145571e29d76',
                itemName: 'Privacy Policy',
                itemPage:'SignupScreen',
            },
            {
                key: '58694a0f-3da1-471f-bd96-145571e29d65',
                itemName: 'Terms of Services',
                itemPage:'SignupScreen',
            },
        ],
    };
    componentDidMount() {
        //console.log(this.props.buttonStyle);
    }
    _renderItem = ({ item,index }) => (
        <>
            <View style={{width:"100%"}}>
                <TouchableOpacity style={styles.modalButton}
                    onPress={() => 
                        this.onPress(this.props.showProps,item.itemPage)
                    }
                >
                    <Text style={[styles.btnTxt]}>{item.itemName}</Text>
                </TouchableOpacity>
            </View>
            {index+1 <= this.state.data.length -1 ?
                <View style={{height:1,backgroundColor:"#E1E1E1",marginTop:2,marginBottom:2,}}></View>
            : 
                false
            }
        </>
    );
    onPress(showProps,itemPage)
    {
        this.setModalVisible(false);
        showProps.navigation.navigate(itemPage);
        return false;
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const {modalVisible} = this.state;
        return (
            
            <>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={this.props.buttonStyle}>{this.state.buttonTitle}</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView,{height:400}]}>
                            <FlatList
                                data={this.state.data}
                                renderItem={this._renderItem}
                                keyExtractor={item => item.key}
                            />
                        
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}
const styles = StyleSheet.create({
    modalButton: {
        width: '100%',
        backgroundColor: "transparent",
        //marginBottom:5,
        
    },
    btnTxt: {
        padding: 10,
        textAlign:"center",
        fontFamily:"FiraSans-Light",
        fontSize:18,
        //paddingBottom:5,
        color: "#000",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 2,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
    },
    
});
export default Policies;