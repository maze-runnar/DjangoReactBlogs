import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";
import { Switch, Layout} from 'antd';
const { Header, Content } = Layout;


const lightmode = {
  background: 'white',
  color: 'black',
};
const darkmode = {
  background:'white',
  color:'white'
};
const headerdark ={
  background: "#5D6D7E ",

  textAlign:'center',

}

const headerlight = {
  background: 'white',
  textAlign:'center'
};

const contentdark = {
 background:'#273746',
 color:'white'
};
const contentlight ={
   background:'white',
}



const spanlight = {fontSize:'30px', fontFamily:'cursive', color:'orange'};
const spandark = {fontSize:'30px', fontFamily:'cursive', color:'white'};


class ArticleList extends React.Component {
  state = {
    articles: [],
    darkMode: false,
  };

  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
    
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();      
    }
  }


 onChange = (checked) => {
   //console.log(`switch to ${checked}`);
   this.setState({darkMode:!this.state.darkMode});
   window.localStorage.setItem('dark', JSON.stringify(this.state.darkMode));
   //this.setState({darkMode:window.localStorage.getItem('dark')})
};


  render() {

    return (
      <div style={localStorage.getItem('dark') === 'true'? contentdark:contentlight}>
        <Header style={localStorage.getItem('dark') === 'true'? headerdark:headerlight}>
          <span style={localStorage.getItem('dark') === 'true'? spandark:spanlight}><i>Dark mode</i></span>
          <Switch onChange={this.onChange} checked ={localStorage.getItem('dark') === 'false' ? true : false}/>
          <span style={localStorage.getItem('dark') === 'true'? spandark:spanlight}><i>light mode</i></span>
        </Header>
        
        <Articles data={this.state.articles} darkMode ={localStorage.getItem('dark') === 'true' ? true : false}/> <br />
        <h2 style ={{color:'orange', fontFamily:'cursive', textAlign:'center', fontWeight:'bold'}}> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" darkMode ={localStorage.getItem('dark') === 'true' ? true : false}/>
      </div>
    );
  }
}

export default ArticleList;
