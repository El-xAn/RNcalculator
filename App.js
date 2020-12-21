import React , {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './components';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      operations: "",
      result: ""
    }
  }

  isOps = false;
  isEqual = true;
  isDot = false;
  isDivide = true;
  isZero = true;
  isWrongOps = false;

  clearAll = () => {
    this.setState({
      operations: this.state.operations = "" ,
      result: this.state.result = ""
    });

    this.isOps = false;
    this.isDot = false;
    this.isWrongOps = false;
    // this.isDivide = true;
    //   this.isZero = true;

  }

  backBtn = () => {
    opsDisp = this.state.operations;
    
    this.setState({
      operations: opsDisp.substring(0, opsDisp.length - 1)
    })
  }

  getButton = (text) => {
    opsDisp = this.state.operations ;
    resDisp = this.state.result;
    
    if (text == '0') { console.log('zero')
      this.setState({operations: opsDisp + text}) ;
      this.isZero = false;
    }else if (this.isWrongOps || opsDisp == "0" || opsDisp == ".") { 
      this.setState({operations: text});
      this.isOps = true;
      this.isDot = true;
      this.isWrongOps = false;
    } else if (text != '0') { console.log('ops')
      this.setState({operations: opsDisp + text}) ;
      this.isOps = true;
      this.isDot = true;
    }
  } 

  getOps = (ops) => {
    opsDisp = this.state.operations;

    if (ops === '/') {
      this.setState({operations: opsDisp + ops});
      this.isDivide = false;

    }else if (this.isOps && ops != '.' && ops != '/') {
      this.setState({operations: opsDisp + ops});
      this.isOps = false;
      this.isDot = false;

    } else if (this.isDot && ops !== '/') {
      this.setState({operations: opsDisp + ops});
      this.isOps = false;
      this.isDot = false;

    }
  }

  equal = () => {
    opsDisp = this.state.operations;
    resDisp = this.state.result;

    if(opsDisp == "") {
      this.clearAll;
    } else if (!this.isOps || !this.isDot) {
      this.resDisp = eval(opsDisp.substring(0, opsDisp.length - 1));
      this.setState({
        result: this.resDisp,
        operations: this.resDisp
      });
      this.isOps = true;
      this.isDot = true;
    } else if (!this.isZero && !this.isDivide ) {
      this.setState({operations: "no no no"});
      this.isWrongOps = true;
      this.isDivide = true;
      this.isZero = true;
    }else { 
      this.resDisp = eval(opsDisp);
      this.setState({
        result: this.resDisp,
        operations: this.resDisp
      });
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.text}>{this.state.operations}</Text>
        </View>

        <View style={styles.display}>
          <Text style={styles.text}>{this.state.result}</Text>
        </View>

        <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.clrButton}>
              <TouchableOpacity style={styles.clrBtnBack} onPress={this.clearAll}>
                <Text style={styles.text}>CA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delBtnBack} onPress={this.backBtn}>
                <Text style={styles.text}>⌫</Text>
              </TouchableOpacity>
          </View>
          
          
          <View style={styles.numbers}>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('7')}>
                <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('8')}>
                <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('9')}>
                <Text style={styles.text}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('4')}>
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('5')}>
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('6')}>
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('1')}>
                <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('2')}>
                <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('3')}>
                <Text style={styles.text}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.zeroBack} onPress={() => this.getButton('0')}>
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getOps('.')}>
                <Text style={styles.text}>.</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
          
          <View style={styles.operators}>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('/')}>
              <Text style={styles.text}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('*')}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.equal()}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
};



export default App;