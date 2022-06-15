<!--- The following README.md sample file was adapted from Brightspace resources under the course of Advanced Web Services for academic use --->

# Assignment 1

- _Group no_: 6
- _Date Created_: 06 Jun 2022
- _Last Modification Date_: 06 Jun 2022
- _Git URL_: https://git.cs.dal.ca/sbhatt/csci5709
- _Assignment URL_: https://assignment1-shivangi-b00863408.herokuapp.com/

## Authors

- [Shivangi Bhatt](sh224186@dal.ca)

## Getting Started

### Prerequisites

To have a local copy of this assingnment-1 up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
It is mandatory to have node and npm installed in the system.

```

### Installing

Follow the below mentioned steps to install node into the system:

1.  Go to the following site https://nodejs.org/en/download/ and download the msi installer for LTS system based on the OS that you have.
2.  Open the msi installer and install it into the system.
3.  Open the command prompt and type the following commands to check if node and npm are installed into the system. It should display the following when succesfully installed.

```
>> node -v
v16.14.0

>> npm -v
8.3.1
```

4. Now open the command prompt and cd to the source code folder. Type and the following command to install all the commands.

```
>> npm install
```

5. Type the following command to start the react app on localhost.

```
>> npm run start
```

6. This will open the app on http://localhost:3000 and the feeds page will be displayed.

## Deployment

To deploy this system on heroku, following steps must be followed

1. Go to https://devcenter.heroku.com/articles/heroku-cli and sowload heroku cli based on your operating system.
2. To check if heroku has been installed type the following command in the command prompt.

```
>> heroku --version
heroku/7.0.0 (darwin-x64) node-v8.0.0
```

3. Now, login into heroku cli using the following command.

```
>> heroku login
```

4. Create a new app on heroku.

```
>> heroku create <myApp>
```

5. Perform the following commands to deploy the code on heroku

```
>> git init
>> heroku git:remote -a assignment1-shivangi-b00863408
>> git add .
>> git commit -m "intended message"
>> git push heroku master
```

6. Go to https://_myapp_.herokuapp.com to view the deployed app

## Built With

- [ReactJS](https://reactjs.org/) - The JavaScript library used for building UI
- [Typescript](https://www.typescriptlang.org/) - Typescript language used with react js
- [Material UI](https://mui.com/) - React Library to build attractive UI components
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) - React library to implement routing
- [Figma](https://www.figma.com/) - Tool to implement prototype
- [Mui for figma](https://www.figma.com/community/file/912837788133317724) - Figma community for implementing Material UI prototypes
- [Draw.io](https://draw.io) - Tool to create task flow diagrams

## Sources Used

### App.tsx

_Lines 24 - 52_

```
 <AppBar position="static">
        <Toolbar>
          <a href="/" className={classes.link}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              AnswerBook
            </Typography>
          </a>
          <Box sx={{ flexGrow: 1 }} />

          <div>
            <Button color="inherit">
              {" "}
              <AddIcon />
              Create Post
            </Button>
            <IconButton color="inherit">
              <NotificationsIcon className={classes.menus} />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>{" "}

```

The code above was created by adapting the code in [Material UI App Bar](https://mui.com/material-ui/react-app-bar/#app-bar-with-menu) as shown below:

```
<AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

```

<!---How--->

- The code in [Material UI App Bar](https://mui.com/material-ui/react-app-bar/#app-bar-with-menu) was implemented by material ui documentation to create appbar
<!---Why--->
- [Material UI App Bar](https://mui.com/material-ui/react-app-bar/#app-bar-with-menu)'s Code was used because the website required to use the Appbar component to create navigation bar.
<!---How--->
- [Material UI App Bar](https://mui.com/material-ui/react-app-bar/#app-bar-with-menu)'s Code was modified by changing the app name, and using the buttons and icons that were required for the website.

### Feed.tsx

_Lines 54 - 115_

```
<Card>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.tags}>
            <Avatar className={classes.avatar}>{props.initials}</Avatar>

            <div>
              <Typography variant="h5" component="div">
                {props.username}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {props.date}
              </Typography>
            </div>

            <Chip
              label={props.type}
              className={
                props.type.toLowerCase() == "social"
                  ? classes.social
                  : classes.technical
              }
            />
          </div>
          <IconButton onClick={handleClick}>
            {" "}
            <MoreVertIcon className={classes.moreIcon} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Subscribe</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </div>
        <CardActionArea onClick={redirectToPost}>
          <Typography gutterBottom variant="h5">
            {props.shortQuestion}
          </Typography>
          <Typography gutterBottom variant="body2">
            {props.question}
          </Typography>
          {props.image ? <img src={props.image} height="200px" /> : null}
        </CardActionArea>

        <div className={classes.lastRow}>
          <div className={classes.tags}>
            {" "}
            {props.tags.map((tag) => (
              <Chip label={tag} className={classes.tag} />
            ))}
          </div>
          <div>
            <FavoriteIcon color="warning" className={classes.icon} />
            <BookmarkBorderIcon />
          </div>
        </div>
      </CardContent>
    </Card>


```

The code above was created by adapting the code in [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction) as shown below:

```
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

```

<!---How--->

- The code in [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction) was implemented by material ui documentation
<!---Why--->
- [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction)'s Code was used because the website required to use the card component for the displaying the feeds.
<!---How--->
- [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction)'s Code was modified by Using the props to display the content of the card, removing unused components and adding the ones that suited the prototypes.

### Employee.tsx

_Lines 54 - 115_

```
<Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        // image="./assets/userImage.jpg"
        alt="green iguana"
      />
      <CardContent>
        <div className={classes.flex}>
          <Typography variant="h5" component="div">
            {props.username}
          </Typography>
          <Button>Subscribe</Button>
        </div>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
        <div className={classes.lastRow}>
          <div>Score: {props.score}</div>
          <div>Badge: {props.badge}</div>
        </div>
      </CardContent>
    </Card>

```

The code above was created by adapting the code in [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction) as shown below:

```
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

```

<!---How--->

- The code in [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction) was implemented by material ui documentation
<!---Why--->
- [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction)'s Code was used because the website required to use the similar card component for the displaying the star employees.
<!---How--->
- [Material UI Cards](https://mui.com/material-ui/react-card/#complex-interaction)'s Code was modified by removing unused components and adding the ones that suited the prototypes. Used props to add the content to the card.

### Feeds.tsx

_Lines 115 - 132_

```
 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter
                </InputLabel>
                <Select
                  value={filter}
                  onChange={handleFilterChange}
                  label="Filter"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"hotTopics"}>Hot Topics</MenuItem>
                  <MenuItem value={"social"}>Social</MenuItem>
                  <MenuItem value={"technical"}>Technical</MenuItem>
                  <MenuItem value={"subscribed"}>Subscribed</MenuItem>
                </Select>
              </FormControl>

```

The code above was created by adapting the code in [Material UI Menu](https://mui.com/material-ui/react-menu/#max-height-menu) as shown below:

```
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

```

<!---How--->

- The code in [Material UI Menu](https://mui.com/material-ui/react-menu/#max-height-menu) was implemented by material ui documentation
<!---Why--->
- [Material UI Menu](https://mui.com/material-ui/react-menu/#max-height-menu)'s Code was used because the website required to use the Menu component for the filter component.
<!---How--->
- [Material UI Menu](https://mui.com/material-ui/react-menu/#max-height-menu)'s Code was modified by removing extra components,changing the name and options for the menu.

### Feed.tsx

_Lines 86 - 89_ _&_ _Line 41- 50_

```
const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElement);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
```

```
   <IconButton onClick={handleClick}>
            {" "}
            <MoreVertIcon className={classes.moreIcon} />
          </IconButton>
          <Menu anchorEl={anchorElement} open={open} onClose={handleCloseMenu}>
            <MenuItem onClick={handleCloseMenu}>Subscribe</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Report</MenuItem>
          </Menu>
        </div>
```

The code above was created by adapting the code in [Material UI Menu](https://mui.com/material-ui/react-menu/#customization) as shown below:

```
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}


```

<!---How--->

- The code in [Material UI Menu](https://mui.com/material-ui/react-menu/#customization) was implemented by material ui documentation
<!---Why--->
- [Material UI Menu](https://mui.com/material-ui/react-menu/#customization)'s Code was used because the website required to use the Menu component for the more icon.
<!---How--->
- [Material UI Menu](https://mui.com/material-ui/react-menu/#customization)'s Code was modified by changing the options for the menu and replacing some of the components with the one that were required. Renamed the variables and modified menu options.

## References

1. “draw.io also known as - Flowchart Maker & Online Diagram Software,” Diagrams.net, 2022. [Online]. Available: https://app.diagrams.net/. [Accessed: Jun. 06, 2022].
2. “Figma: the collaborative interface design tool.,” Figma, 2022. [Online]. Available: https://www.figma.com/. [Accessed: Jun. 06, 2022].
3. “Wolf Winter snow", Pixabay, 2022. [Online]. Available: https://pixabay.com/photos/wolf-winter-snow-predator-frost-2043464/. [Accessed: 06- Jun- 2022].
