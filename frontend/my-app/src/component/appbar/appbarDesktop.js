import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop ({ matches }) {

   
    return (
        
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type = "row">
                <ListItemButton>
                <ListItemText primary="Home"/>
                </ListItemButton>

                <ListItemButton>
                <ListItemText primary="About"/>
                </ListItemButton>
                
                <ListItemButton>
                <ListItemText primary="Scholarships"/>
                </ListItemButton>
                
                <ListItemButton>
                <ListItemText primary="Contact Us"/>
                </ListItemButton>
                
                
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        
    );
}