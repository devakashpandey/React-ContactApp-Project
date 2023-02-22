import React, { useState, useEffect } from 'react'
import "./Header.css"
import { styled, alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
                      position: 'relative',
                      borderRadius: theme.shape.borderRadius,
                      backgroundColor: alpha(theme.palette.common.white, 0.15),
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.common.white, 0.25),
                      },
                      marginLeft: 0,
                      width: '100%',
                      [theme.breakpoints.up('sm')]: {
                        marginLeft: theme.spacing(1),
                        width: 'auto',
                      },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
                      padding: theme.spacing(0, 2),
                      height: '100%',
                      position: 'absolute',
                      pointerEvents: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
              color: 'inherit',
              '& .MuiInputBase-input': {
              padding: theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
               paddingLeft: `calc(1em + ${theme.spacing(4)})`,
               transition: theme.transitions.create('width'),
               width: '100%',
   [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
           width: '20ch',
       },
       }, 
  },
 }));


const Header = () => {
   const [activeTab, setActiveTab] = useState("Home")
  
   const location = useLocation()
 
   useEffect(() => {
       if(location.pathname === "/add") return setActiveTab("AddEditPage")
       else if (location.pathname === "/about") return setActiveTab("About")

   }, [location])

   const darkTheme = createTheme({
                      palette: {
                      mode: 'dark',
            },
     });




  return (
     <>
     <ThemeProvider theme={darkTheme}>
     <div className='nav-bar'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily:"jost" }}>
            Contact App
          </Typography>

         

           {/* all menus here  */}
           <NavLink to="/" >
             <p className={`${activeTab === "Home" ? "active" : "" }`}
                onClick={() => setActiveTab("Home")}
               >
                 Home
             </p>
            </NavLink>

            <NavLink to="/add" >
             <p className={`${activeTab === "AddEditPage" ? "active" : "" }`}
                onClick={() => setActiveTab("AddEditPage")}
               >
                 Add Contact
             </p>
            </NavLink>

            <NavLink to="/about">
             <p className={`${activeTab === "About" ? "active" : "" }`}
                onClick={() => setActiveTab("About")}         
               >
                 About
             </p>
            </NavLink>


            {/* search bar here  */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </ThemeProvider>
     </>
  )
}

export default Header;
