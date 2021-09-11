/**
 * createdby Daewu Bintara
 * Saturday, 28 Aug 2021
 * 12:07 ☕
 */
import {useMediaQuery} from "react-responsive";

const ScreenSize = {
    'isDesktopOrLaptop':{query: '(min-width: 992px)'},
    'isBigScreen':{ query: '(min-width: 1824px)' },
    'isTablet':{ minWidth: 768, maxWidth: 991},
    'isMobile':{ maxWidth: 767, minWidth: 368 },
    'isSmallMobile':{ query: '(max-width: 367px)' },
    'isPortrait':{ query: '(orientation: portrait)' },
    'isLandscape':{ query: '(orientation: landscape)' },
    'isRetina':{ query: '(min-resolution: 2dppx)' },
};

function Screen(type) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery(type);
}

export {
    Screen,
    ScreenSize
};
