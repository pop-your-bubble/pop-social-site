import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import imgNess from "./images/ness.jpg";

const staffLeft = [
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  }
];

const staffRight = [
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: imgNess
  }
];

const Staff = () => {
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
