import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useLayoutContext } from "../../app/context/layoutContext";
import { appRoutes } from "../../routes/_routes";
import { Link } from "react-router-dom";

const Sidebar = ({ DrawerHeader }) => {
  const theme = useTheme();
  const { drawerWidth, open, handleDrawerClose } = useLayoutContext();

  return (
    <Drawer
      sx={{
        width: open && drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          // background: "#070B28",
          color: "#fff",
          // margin: "20px",
          borderRadius: "8px",
          backdropFilter: "blur(42px)",
          background: "#070b284d",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {appRoutes.map(
          (link, index) =>
            link.isAuthRoute ?? (
              <Link key={link.linkLabel} to={link.path}>
                <ListItem
                  key={link.linkLabel}
                  className="list_item"
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon className="list_item_button">
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={link.linkLabel} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
        )}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
