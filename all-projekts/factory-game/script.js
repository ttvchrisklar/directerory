var resorese = {
        copper: 0,
        iron: 0,
        gold: 0,
        platinum: 0,
        wood: 0,
        stone: 0,
        oil: 0,
        plastic: 0,
        ruber: 0,
    },
    mony = { coin: 0, thosend: 0, million: 0, billion: 0, trillion: 0 };

function lode_Game() {
    //add all of the elements that needs to be loded at the start of the game.
}
function mony_Calculator() {
    while (mony.coin <= 1000) {
        mony.coin - 1000;
        mony.thosend++;
        console.log(mony);
    }
    while (mony.thosend <= 1000) {
        mony.thosend - 1000;
        mony.million++;
    }
    while (mony.million <= 1000) {
        mony.million - 1000;
        mony.billion++;
    }
    while (mony.billion <= 1000) {
        mony.billion - 1000;
        mony.trillion++;
    }
}
