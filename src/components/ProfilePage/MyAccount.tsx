import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProfilePage from './ProfilePage';
import "./MyAccount.css"
import MyFriends from './MyFriends';

export default function MyAccount() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className='Tabs'>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Profile Settings" value="1" />
              <Tab label="My Posts" value="2" />
              <Tab label="Subscribed Users" value="3" />
            </TabList>
          </div>
        </Box>
        <TabPanel value="1"><ProfilePage></ProfilePage></TabPanel>
        <TabPanel value="2"><h1>My Posts</h1></TabPanel>
        <TabPanel value="3"><MyFriends></MyFriends></TabPanel>
      </TabContext>
    </Box>
  );
}
