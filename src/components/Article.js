import React from "react";
import { List, Avatar, Icon } from "antd";


const lightmode = {
  background: 'white',
  color: 'black',
};
const darkmode = {
  background:'#273746',
  color:'white'
}

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <Icon type="star-o" style ={props.darkMode? darkmode : lightmode} />,
            <Icon type="like-o" text="156" style={props.darkMode? darkmode : lightmode} />,
            <Icon type="message" style = {props.darkMode? darkmode : lightmode} />,
            <Icon type="link" style = {props.darkMode? darkmode : lightmode} />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://www.desktopbackground.org/p/2013/07/15/607734_35-harry-potter-wallpapers-35-210-harry-potter-hd-wallpapers_1920x1080_h.jpg"
            />
          }

          style = {props.darkMode? darkmode : lightmode}

        >
          <List.Item.Meta
            avatar={<Avatar src="https://www.desktopbackground.org/p/2013/07/15/607734_35-harry-potter-wallpapers-35-210-harry-potter-hd-wallpapers_1920x1080_h.jpg" />}
            title={<a href={`/articles/${item.id}`}> <span style ={props.darkMode? darkmode : lightmode} >{item.title} </span></a>}
            description={item.description}

          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
