import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import ness from "./images/ness.jpg";

const staffLeft = [
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  }
];

const staffRight = [
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  },
  {
    name: "Bumblebee Boy",
    description:
      "Ness (ネス, Ness) is the silent main protagonist of EarthBound and is analogous to Ninten and Lucas in their respective games. He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps. In the EarthBound Player's Guide, he is said to wear a special baseball cap with his favorite team's logo on the front.",
    imageURL: ness
  }
];

const Staff = () => {
  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <List>
            {staffRight.map(staff => (
              <ListItem key={staff.name}>
                <img
                  style={{ width: 80, "border-radius": "50%" }}
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
