import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const staffLeft = [
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  }
];

const staffRight = [
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  },
  {
    name: "Bumblebee Boy",
    description: "PK THUNDER!!!",
    imageURL:
      "https://pbs.twimg.com/media/CaPjgvPWQAAgQme.jpg"
  }
];

const Staff = () => {
  return (
    <>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={6}>
          <List>
            {staffLeft.map(staff => (
              <ListItem
                key={staff.name}
                onClick={() => window.open(staff.link, "_blank")}
              >
                <img
                  style={{ width: 60, borderRadius: "50%" }}
                  src={staff.imageURL}
                ></img>{" "}
                <ListItemText
                  style={{ padding: "15px" }}
                  primary={staff.name}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            {staffRight.map(staff => (
              <ListItem
                key={staff.name}
                onClick={() => window.open(staff.link, "_blank")}
              >
                <img
                  style={{ width: 60, "border-radius": "50%" }}
                  src={staff.imageURL}
                ></img>{" "}
                <ListItemText
                  style={{ padding: "15px" }}
                  primary={staff.name}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Staff;
