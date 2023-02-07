import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../user.module.css";
import CardMenu from "./CardMenu";

const UserCard = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={styles.card_container}>
      <CardHeader
        subheaderTypographyProps={{ color: "white" }}
        className={styles.card_header}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={handleClick} />
          </IconButton>
        }
        title={`${user.firstName}  ${user.lastName}`}
        subheader={user.email}
      />
      <CardActions className={styles.card_actions} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon fontSize="small" />
        </IconButton>
      </CardActions>
      <CardMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Card>
  );
};

export default UserCard;
