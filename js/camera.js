function _0x47dd(_0x5099a3, _0xf1be64) {
    var _0x26c44e = _0x26c4();
    return _0x47dd = function(_0x47dd50, _0x329f1b) {
        _0x47dd50 = _0x47dd50 - 0x1a9;
        var _0x46b755 = _0x26c44e[_0x47dd50];
        if (_0x47dd['NuhSlT'] === undefined) {
            var _0x1d1102 = function(_0xb7811) {
                var _0xb923d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var _0x4b2c85 = '',
                    _0xd7f89d = '';
                for (var _0xbbc294 = 0x0, _0x26badb, _0xb3bf5c, _0x33edf6 = 0x0; _0xb3bf5c = _0xb7811['charAt'](_0x33edf6++); ~_0xb3bf5c && (_0x26badb = _0xbbc294 % 0x4 ? _0x26badb * 0x40 + _0xb3bf5c : _0xb3bf5c, _0xbbc294++ % 0x4) ? _0x4b2c85 += String['fromCharCode'](0xff & _0x26badb >> (-0x2 * _0xbbc294 & 0x6)) : 0x0) {
                    _0xb3bf5c = _0xb923d['indexOf'](_0xb3bf5c);
                }
                for (var _0x58cda6 = 0x0, _0x27443d = _0x4b2c85['length']; _0x58cda6 < _0x27443d; _0x58cda6++) {
                    _0xd7f89d += '%' + ('00' + _0x4b2c85['charCodeAt'](_0x58cda6)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xd7f89d);
            };
            _0x47dd['BnQNnD'] = _0x1d1102, _0x5099a3 = arguments, _0x47dd['NuhSlT'] = !![];
        }
        var _0x2b0041 = _0x26c44e[0x0],
            _0x5abf8d = _0x47dd50 + _0x2b0041,
            _0x105a15 = _0x5099a3[_0x5abf8d];
        return !_0x105a15 ? (_0x46b755 = _0x47dd['BnQNnD'](_0x46b755), _0x5099a3[_0x5abf8d] = _0x46b755) : _0x46b755 = _0x105a15, _0x46b755;
    }, _0x47dd(_0x5099a3, _0xf1be64);
}
var _0x3515ee = _0x47dd;
(function(_0x8240b9, _0x2d1015) {
    var _0x1b0252 = _0x47dd,
        _0x3c42ff = _0x8240b9();
    while (!![]) {
        try {
            var _0x41ff15 = -parseInt(_0x1b0252(0x1b4)) / 0x1 + -parseInt(_0x1b0252(0x1b0)) / 0x2 + -parseInt(_0x1b0252(0x1b9)) / 0x3 * (parseInt(_0x1b0252(0x1ba)) / 0x4) + parseInt(_0x1b0252(0x1be)) / 0x5 * (parseInt(_0x1b0252(0x1ad)) / 0x6) + parseInt(_0x1b0252(0x1b8)) / 0x7 * (-parseInt(_0x1b0252(0x1b1)) / 0x8) + parseInt(_0x1b0252(0x1af)) / 0x9 * (-parseInt(_0x1b0252(0x1a9)) / 0xa) + parseInt(_0x1b0252(0x1ac)) / 0xb;
            if (_0x41ff15 === _0x2d1015) break;
            else _0x3c42ff['push'](_0x3c42ff['shift']());
        } catch (_0x50769b) {
            _0x3c42ff['push'](_0x3c42ff['shift']());
        }
    }
}(_0x26c4, 0x377eb));
import * as _0xb7811 from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
export class CameraController {
    constructor(_0xb923d, _0x4b2c85) {
        var _0x1c1267 = _0x47dd;
        this['camera'] = _0xb923d, this['controls'] = new OrbitControls(_0xb923d, _0x4b2c85[_0x1c1267(0x1ae)]), this['setupControls'](), this[_0x1c1267(0x1b7)](), this[_0x1c1267(0x1bb)] = ![];
    }['setupControls']() {
        var _0xee9939 = _0x47dd;
        this['controls'][_0xee9939(0x1bc)] = !![], this[_0xee9939(0x1b2)]['dampingFactor'] = 0.14, this['controls']['rotateSpeed'] = 0.3, this['controls'][_0xee9939(0x1aa)] = 0.6, this['controls']['minPolarAngle'] = 0.35, this[_0xee9939(0x1b2)]['maxPolarAngle'] = Math['PI'] - 0.35, this['controls'][_0xee9939(0x1bf)] = ![];
    }['setupCamera']() {
        var _0x13dc24 = _0x47dd;
        this['camera'][_0x13dc24(0x1b6)]['set'](0x0, 0x3c, 0xc8), this['camera']['lookAt'](0x0, 0x0, 0x0);
    }[_0x3515ee(0x1bd)]() {
        var _0x55f02f = _0x3515ee;
        this['camera'][_0x55f02f(0x1b3)] = window['innerWidth'] / window['innerHeight'], this['camera']['updateProjectionMatrix']();
    }['triggerAnimation']() {
        var _0x1035ae = _0x3515ee;
        !this[_0x1035ae(0x1bb)] && (this[_0x1035ae(0x1bb)] = !![], this[_0x1035ae(0x1b2)]['enabled'] = ![], gsap['to'](this[_0x1035ae(0x1b5)]['position'], {
            'x': 0x0,
            'y': 0xa,
            'z': 0x50,
            'duration': 0x5,
            'ease': _0x1035ae(0x1ab),
            'onUpdate': () => {
                var _0x211e76 = _0x1035ae;
                this[_0x211e76(0x1b5)]['lookAt'](0x0, 0x0, 0x0);
            },
            'onComplete': () => {
                var _0x58d196 = _0x1035ae;
                gsap['to'](this['camera'][_0x58d196(0x1b6)], {
                    'x': 0x0,
                    'y': 0x1e,
                    'z': 0x258,
                    'duration': 0xc,
                    'ease': 'power2.inOut',
                    'onUpdate': () => {
                        this['camera']['lookAt'](0x0, 0x0, 0x0);
                    },
                    'onComplete': () => {
                        var _0x5d8c99 = _0x58d196;
                        gsap['to'](this[_0x5d8c99(0x1b5)]['position'], {
                            'x': -0xc8,
                            'y': 0x190,
                            'z': -0x2bc,
                            'duration': 0x5,
                            'ease': 'power2.inOut',
                            'onUpdate': () => {
                                var _0x3ac38f = _0x5d8c99;
                                this[_0x3ac38f(0x1b5)][_0x3ac38f(0x1c0)](0x0, 0x0, 0x0);
                            },
                            'onComplete': () => {
                                this['isAnimating'] = ![], this['controls']['enabled'] = !![];
                            }
                        });
                    }
                });
            }
        }));
    }['update']() {
        this['controls']['update']();
    }
}

function _0x26c4() {
    var _0x4ace93 = ['nJK1mtC2AK90v3zs', 'AxnbBMLTyxrPBMC', 'zw5HyMXLrgfTCgLUzW', 'AgfUzgXLuMvZAxPL', 'mtb3CeLrANy', 'zw5HyMXLugfU', 'Bg9VA0f0', 'mtbiAvn3CK4', 'EM9VBvnWzwvK', 'Cg93zxiYlMLUt3v0', 'mtK3mda4mdj1veHuzgy', 'mtiXmZe0wuzVyMXo', 'zg9TrwXLBwvUDa', 'nZiYnZe4wfbkyMLr', 'odyZmJuWvKvyDLnh', 'ofjZv1LMsq', 'y29UDhjVBhm', 'yxnWzwn0', 'mZqYodeZsu50zgzI', 'y2fTzxjH', 'Cg9ZAxrPB24', 'C2v0Dxbdyw1LCMe', 'mJGXmJq5nxPqzwrJra', 'nMPnuK9uCG'];
    _0x26c4 = function() {
        return _0x4ace93;
    };
    return _0x26c4();
}