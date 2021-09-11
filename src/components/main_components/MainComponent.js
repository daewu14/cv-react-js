/**
 * createdby Daewu Bintara
 * Sunday, 29 Aug 2021
 * 11:12 ☕
 */
import styled from "styled-components";
import {BgColor, BgColorOld, PrimaryColor} from "../../themes/AppTheme";
import {Paper, Tab, Tabs} from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button} from "react-bootstrap";
import {withStyles} from "@material-ui/styles";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';

const MainComponent = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Container>
            <AppBarStyled>
                <Paper elevation={0} style={{
                    flexGrow: 1,
                    color: BgColorOld,
                }}>
                    <StyledTabs
                        in
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Welcome" {...a11yProps(0)}
                            icon={<DashboardRoundedIcon />}
                        />
                        <Tab label="Profile" {...a11yProps(1)}
                            icon={<RecentActorsRoundedIcon/>}
                        />
                        <Tab label="Resume" {...a11yProps(2)}
                            icon={<PollRoundedIcon/>}
                        />
                        <Tab label="Contact" {...a11yProps(2)}
                            icon={<ContactMailRoundedIcon/>}
                        />
                    </StyledTabs>
                </Paper>
            </AppBarStyled>
            <TabPanel value={value} index={0} dir={theme.direction}>
                Item One
                <Button onClick={()=>handleChangeIndex(1)}>
                    Menuju ke halaman 2
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                Item Four
            </TabPanel>
        </Container>
    );
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: PrimaryColor,
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const AppBarStyled = styled.div`
  background-color: ${BgColorOld};
  display: flex;
`

const Container = styled.div`
  flex: 3;
  width: 100%;
  background-color: ${BgColor};
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default MainComponent;
