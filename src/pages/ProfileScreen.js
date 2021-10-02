import styled from "styled-components";
import {PrimaryColor} from "../themes/AppTheme";
import {EventNote, MailOutline, Map, PermContactCalendar, Phone} from "@material-ui/icons";
import {Education} from "../components/profile_components/x_profile_components";

/**
 * createdby Daewu Bintara
 * Saturday, 02 Oct 2021
 * 08:56 ☕
 */

export const ProfileScreen = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Container>
                <CenterTextBoldLg>About Me</CenterTextBoldLg>
                <SpacerMd/>
                <Divider/>
                <InfoItem
                    icon = {<PermContactCalendar/>}
                    title = "Name"
                    info = "Daewu Gus Bintara Putra"
                />
                <InfoItem
                    icon = {<EventNote/>}
                    title = "Date of birth"
                    info = "August 14th 1996"
                />
                <InfoItem
                    icon = {<Phone/>}
                    title = "Phone"
                    info = "+62 882 2635 6860"
                />
                <InfoItem
                    icon = {<MailOutline/>}
                    title = "Email"
                    info = "daewu.bintara1996@gmail.com"
                />
                <InfoItem
                    icon = {<Map/>}
                    title = "Address"
                    info = "Yogyakarta, Indonesia"
                />
                <SpacerMd/>
                <Education/>
            </Container>
        </div>
    );
}

const InfoItem = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
        }}>
            <div style={{
                display: "flex"
            }}>
                <div style={{
                    marginRight: 10
                }}>{props.icon}</div>
                <div>{props.title}</div>
            </div>
            <div>{props.info}</div>
        </div>
    );
}

const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #61dafb;
`

const SpacerMd = styled.div`
  height: 10px;
  width: 10px;
`

const Container = styled.div`
  flex: 2;
  width: 100%;
  padding: 15px;
  max-width: 650px;
`

const CenterTextS = styled.div`
  color: black;
  text-align: center;
  font-size: 15px;
`

const CenterTextBoldMd = styled.div`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`

const CenterTextBoldLg = styled.div`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`
