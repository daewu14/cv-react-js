import styled from "styled-components";
import {Button} from "react-bootstrap";

/**
 * createdby Daewu Bintara
 * Thursday, 30 Sep 2021
 * 12:23 ☕
 */


export const WelcomeScreen = () => {

    const onDownloadCvClick = () => {
        alert("Haloo")
    }

    return (
        <Container>
            <CenterTextBoldMd>Hello, I'am</CenterTextBoldMd>
            <SpacerMd/>
            <CenterTextBoldLg>Daewu Gus Bintara Putra</CenterTextBoldLg>
            <SpacerMd/>
            <div style={{
                textAlign: "center",
                fontSize: 20
            }}>Mobile Developer</div>
            <SpacerMd/>
            <div style={{
                textAlign: "center",
                fontSize: 15,
                fontStyle: "italic"
            }}>A Mobile Developer from Yogyakarta</div>
            <SpacerMd/>
            <CenterTextBoldLg>+62 882 2635 6860</CenterTextBoldLg>
            <div style={{
                textAlign: "center",
                fontSize: 20,
            }}>daewu.bintara1996@gmail.com</div>
            <SpacerMd/>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 5,
                }} onClick={onDownloadCvClick}>Download CV</Button>
            </div>
        </Container>
    );
}

const SpacerMd = styled.div`
  height: 10px;
  width: 10px;
`

const Container = styled.div`
  flex: 2;
  width: 100%;
  padding: 15px;
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
