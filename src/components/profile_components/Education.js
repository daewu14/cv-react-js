import styled from "styled-components";

/**
 * createdby Daewu Bintara
 * Saturday, 02 Oct 2021
 * 16:40 ☕
 */

const Education = () => {
    return (
        <div>
            <CenterTextBoldLg>My Recent Education</CenterTextBoldLg>
            <SpacerMd/>
            <Divider/>
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
const CenterTextBoldLg = styled.div`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`

export default Education
