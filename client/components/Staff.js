import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import useScrollToTopOnMount from "../customHooks/useScrollToTopOnMount";

import imgDavid from "../images/David.jpg";
import imgRick from "../images/Rick.jpg";
import imgAndy from "../images/Andy.jpg";
import imgYoon from "../images/Yoon.jpg";
import imgMauricio from "../images/Mauricio.jpg";
import imgSeokhyun from "../images/Seokhyun.jpg";

const staffLeft = [
  {
    name: "Yoonsup Lee",
    description:
      "My name is Yoon Lee, CEO and founder of POP. I am a senior MIS major student currently attending UT Austin. I am passionate about POP because I have witnessed my friends struggle with loneliness and isolation problem.",
    imageURL: imgYoon
  },
  {
    name: "Andy Pham",
    description:
      "My full time job is a software engineer at Global Payments. I'm a recent graduate of UT. I work as an engineer for POP and am responsible for overall system design. My passion to work on this comes stems from wanting to connect people together and solve the problem of loneliness. Something I've found difficult after moving to a new city and knowing nobody.",
    imageURL: imgAndy
  },
  {
    name: "Seokhyun Baek",
    description:
      "I’m the marketing lead at POP. I am a junior Marketing major, and my duties involve crafting marketing strategy and a boots on the ground initiative so POP is able to establish itself and rapidly expand at our locations in terms of user acquisition and brand recognition. I’ve seen many people I know go through the struggle of simply not knowing where to begin making friends, and I work on POP to create a solution for those people.",
    imageURL: imgSeokhyun
  }
];

const staffRight = [
  {
    name: "Rick Kim",
    description:
      "I'm responsible for operations and software development at POP. I am a senior Computational Engineering major, and my passion for POP originates from a strong desire to create a connected environment by creating a powerful tool to help new members of a community to find their special place within it.",
    imageURL: imgRick
  },
  {
    name: "David Pham",
    description:
      "I currently lead software engineering and product development at POP. I am a junior Computer Science major, and I am responsible for building a world-class mobile app, website, and backend that cultivates an environment for our users to develop lifelong friends and connections on our platform. My passion comes from challenging the social status quo and changing it with technologies in ways we’ve never seen previously possible.",
    imageURL: imgDavid
  },
  {
    name: "Mauricio Canales",
    description:
      "I'm a back-end developer for POP. I am a senior Computational Engineering major, and what motivates me to work at POP is that we are redefining what a social app can be and using it to create a better future. My expertise lies in Computational Engineer at UT Austin, Javascript, and NoSQL databases like Mongodb.  In my spare time I enjoy riding my bike around Austin and playing the guitar.",
    imageURL: imgMauricio
  }
];

const Staff = () => {
  useScrollToTopOnMount();
  return (
    <div style={{ padding: "5%" }}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs sm={6} md={6} lg={6}>
          <List>
            {staffLeft.map(staff => (
              <ListItem key={staff.name}>
                <img
                  style={{ width: 80, borderRadius: "50%" }}
                  src={staff.imageURL}
                ></img>{" "}
                <ListItemText
                  style={{ padding: "15px" }}
                  primary={staff.name}
                  secondary={staff.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs sm={6} md={6} lg={6}>
          <List>
            {staffRight.map(staff => (
              <ListItem key={staff.name}>
                <img
                  style={{ width: 80, borderRadius: "50%" }}
                  src={staff.imageURL}
                ></img>{" "}
                <ListItemText
                  style={{ padding: "15px" }}
                  primary={staff.name}
                  secondary={staff.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Staff;
