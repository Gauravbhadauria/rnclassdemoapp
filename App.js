import {Component} from 'react';
import {Text, View} from 'react-native';
import ClassComp from './src/ClassComp';

console.log("hello")
class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      count: 0,

    };
  }

  componentDidMount() {
    console.log("changes made by dev2")
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentShouldUpdate(){
    console.log('componentShouldUpdate');
    return false
  }

  
  render() {
    console.log('render');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>{this.state.count}</Text>
        <Text
          style={{fontSize: 30}}
          onPress={() => {
            this.setState({count: this.state.count + 1});
          }}>
          {'Increase Countdsfsdfsdfsdf'}
        </Text>

        {this.state.count<10 && <ClassComp name={'hello'}/>}
      </View>
    );
  }
}
export default App;

//constructor
//render
//componentShouldUpdate  =>
//componentDidMount ==> load
//componentDidUpdate ==> update
//componentWillUnmount  ==> un load// not is use
