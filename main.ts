basic.forever(function () {
    let ADKB = pins.analogReadPin(AnalogPin.P0)
    if (ADKB < 10 && ADKB > 0) {
        basic.showString("K0")
    }
    if (ADKB < 70 && ADKB > 60) {
        basic.showString("K1")
    }
    if (ADKB < 140 && ADKB > 130) {
        basic.showString("K2")
    }
    if (ADKB < 200 && ADKB > 190) {
        basic.showString("K3")
    }
    if (ADKB < 260 && ADKB > 250) {
        basic.showString("K4")
    }
    if (ADKB < 325 && ADKB > 315) {
        basic.showString("K5")
    }
    if (ADKB < 390 && ADKB > 380) {
        basic.showString("K6")
    }
    if (ADKB < 450 && ADKB > 440) {
        basic.showString("K7")
    }
    if (ADKB < 510 && ADKB > 500) {
        basic.showString("K8")
    }
    if (ADKB < 580 && ADKB > 560) {
        basic.showString("K9")
    }
    if (ADKB < 640 && ADKB > 630) {
        basic.showString("K10")
    }
    if (ADKB < 700 && ADKB > 690) {
        basic.showString("K11")
    }
    if (ADKB < 760 && ADKB > 750) {
        basic.showString("K12")
    }
    if (ADKB < 820 && ADKB > 810) {
        basic.showString("K13")
    }
    if (ADKB < 880 && ADKB > 870) {
        basic.showString("K14")
    }
    if (ADKB < 945 && ADKB > 935) {
        basic.showString("K15")
    }
})
