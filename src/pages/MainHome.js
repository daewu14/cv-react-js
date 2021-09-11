/**
 * createdby Daewu Bintara
 * Saturday, 28 Aug 2021
 * 10:46 ☕
 */

import {Screen, ScreenSize} from "../utils/Screen";
import {BgColor, PrimaryColor} from "../themes/x_themes";
import styled from "styled-components";
import {
    SideHomeComponent,
    MainComponent
} from "../components/x_components";

export const MainHome = () => {
    const mg = smargin();
    return (
        <Wrapper>
            <div style={{
                backgroundColor: BgColor,
                position: "absolute",
                top: mg,
                bottom: mg,
                left: mg,
                right: mg,
            }}>
                <Container>
                    <SideHomeComponent/>
                    <MainComponent/>
                </Container>
            </div>
        </Wrapper>
    );
}

/**
 * Screen margin responsive
 * @returns {number}
 */
function smargin() {
    let margin = 0;
    if (Screen(ScreenSize.isDesktopOrLaptop)) {
        margin = 100;
    }
    if (Screen(ScreenSize.isTablet)) {
        margin = 50;
    }
    if (Screen(ScreenSize.isMobile)) {
        margin = 20;
    }
    if (Screen(ScreenSize.isSmallMobile)) {
        margin = 10;
    }
    return margin;
}

const Container = styled.div`
  background-color: ${BgColor};
  height: 100%;
  width: 100%;
  display: flex;
`

const Wrapper = styled.div`
  background-color: ${PrimaryColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
