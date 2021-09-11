/**
 * createdby Daewu Bintara
 * Saturday, 28 Aug 2021
 * 22:22 ☕
 */
import {Screen, ScreenSize} from "../../utils/Screen";
import styled from 'styled-components';
import {BgColor, PrimaryColor} from "../../themes/AppTheme";
import {DaewuProfile} from "../../assets/images/images";

export default SideHomeComponent;

function SideHomeComponent(){

    // Jika buka desktop mode
    if (!Screen(ScreenSize.isDesktopOrLaptop))
        return null;

    return(
        <Container>
            <Wrapper/>
        </Container>
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
  backdrop-filter: blur(30px);
  flex: 2;
  width: 100%;
`

const Wrapper = styled.div`
  position: absolute;
  background-image: url(${DaewuProfile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
