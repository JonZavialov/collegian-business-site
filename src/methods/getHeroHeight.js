import $ from 'jquery';

function getHeroHeight() {
    return $(window).height() - $('#rootNav').height();
}

export default getHeroHeight;