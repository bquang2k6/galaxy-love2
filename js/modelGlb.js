const _0x642f51 = _0x4ba3;
(function(_0x4aec63, _0x48dc02) {
    const _0x10c1f4 = _0x4ba3,
        _0x4a28db = _0x4aec63();
    while (!![]) {
        try {
            const _0x4bdb8a = parseInt(_0x10c1f4(0x184)) / 0x1 + parseInt(_0x10c1f4(0x179)) / 0x2 * (-parseInt(_0x10c1f4(0x186)) / 0x3) + parseInt(_0x10c1f4(0x175)) / 0x4 * (-parseInt(_0x10c1f4(0x18e)) / 0x5) + -parseInt(_0x10c1f4(0x18c)) / 0x6 + parseInt(_0x10c1f4(0x174)) / 0x7 * (-parseInt(_0x10c1f4(0x17f)) / 0x8) + -parseInt(_0x10c1f4(0x177)) / 0x9 * (-parseInt(_0x10c1f4(0x17c)) / 0xa) + parseInt(_0x10c1f4(0x173)) / 0xb * (parseInt(_0x10c1f4(0x17a)) / 0xc);
            if (_0x4bdb8a === _0x48dc02) break;
            else _0x4a28db['push'](_0x4a28db['shift']());
        } catch (_0x2a7715) {
            _0x4a28db['push'](_0x4a28db['shift']());
        }
    }
}(_0x5700, 0x266ab));
import * as _0x45e1f0 from 'three';

function _0x4ba3(_0x1c4b4c, _0x13f95e) {
    const _0x570060 = _0x5700();
    return _0x4ba3 = function(_0x4ba3ad, _0xc9f275) {
        _0x4ba3ad = _0x4ba3ad - 0x172;
        let _0x32557e = _0x570060[_0x4ba3ad];
        if (_0x4ba3['fiCzpE'] === undefined) {
            var _0x1ad4eb = function(_0x45e1f0) {
                const _0x17730b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x4372f9 = '',
                    _0x238262 = '';
                for (let _0x14da1d = 0x0, _0x26e22c, _0x79c00d, _0x598f61 = 0x0; _0x79c00d = _0x45e1f0['charAt'](_0x598f61++); ~_0x79c00d && (_0x26e22c = _0x14da1d % 0x4 ? _0x26e22c * 0x40 + _0x79c00d : _0x79c00d, _0x14da1d++ % 0x4) ? _0x4372f9 += String['fromCharCode'](0xff & _0x26e22c >> (-0x2 * _0x14da1d & 0x6)) : 0x0) {
                    _0x79c00d = _0x17730b['indexOf'](_0x79c00d);
                }
                for (let _0x17a0de = 0x0, _0x7c8366 = _0x4372f9['length']; _0x17a0de < _0x7c8366; _0x17a0de++) {
                    _0x238262 += '%' + ('00' + _0x4372f9['charCodeAt'](_0x17a0de)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x238262);
            };
            _0x4ba3['MzBqJL'] = _0x1ad4eb, _0x1c4b4c = arguments, _0x4ba3['fiCzpE'] = !![];
        }
        const _0x1949da = _0x570060[0x0],
            _0x400f7c = _0x4ba3ad + _0x1949da,
            _0x5d050f = _0x1c4b4c[_0x400f7c];
        return !_0x5d050f ? (_0x32557e = _0x4ba3['MzBqJL'](_0x32557e), _0x1c4b4c[_0x400f7c] = _0x32557e) : _0x32557e = _0x5d050f, _0x32557e;
    }, _0x4ba3(_0x1c4b4c, _0x13f95e);
}

function _0x5700() {
    const _0x470d33 = ['C2nLBMu', 'nJCXCMDrv0Pn', 'nZi4mdyZAKX0wvf1', 'oeDdzeHlEa', 'C2LU', 'mZm3ndKXqKrIvgv1', 'ywrK', 'nNzqrMLkra', 'mtmWntK2yu53s0fL', 'Bw9KzwW', 'mtbTyw5tu1i', 'BgvUz3rO', 'yw5PBwf0zq', 'oeL5wuzxvq', 'zxHPC3rPBMDby3rPB24', 'Bg9N', 'ug9PBNrmAwDODa', 'C2v0', 'mJe1nJa5EMDdBKfe', 'rxjYB3iGzgv0ywLSCZO', 'mJq5mZKZBgzVvLfo', 'CgXHEq', 'Cg9ZAxrPB24', 'Bg9Hze1VzgvS', 'Bw9KzwXhCM91Ca', 'zxjYB3i', 'mtqXodaYohvOuMzksG', 'tM8Gyw5PBwf0Aw9UCYbMB3vUzcbPBIb0AguGBw9KzwW', 'ndi0nJKWuKjNy1zO'];
    _0x5700 = function() {
        return _0x470d33;
    };
    return _0x5700();
}
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
export class Heart {
    constructor(_0x17730b) {
        const _0x31d6df = _0x4ba3;
        this[_0x31d6df(0x172)] = _0x17730b, this['model'] = null, this['mixer'] = null, this['clock'] = new _0x45e1f0['Clock'](), this[_0x31d6df(0x189)]();
    }['loadModel']() {
        const _0x4372f9 = new GLTFLoader();
        _0x4372f9['load']('assets/images/heart_in_love.glb', _0x238262 => {
            const _0x509a46 = _0x4ba3;
            this[_0x509a46(0x17b)] = _0x238262[_0x509a46(0x172)], this['model'][_0x509a46(0x188)][_0x509a46(0x183)](0x0, 0x0, 0x0), this['model']['rotation']['set'](0x0, 0x0, 0x0), this['model']['updateMatrix'](), this['modelGroup'] = new _0x45e1f0['Group'](), this['modelGroup']['add'](this['model']), this[_0x509a46(0x17b)]['scale'][_0x509a46(0x183)](1.2, 1.2, 1.2), this[_0x509a46(0x18a)]['position']['set'](0x0, 0x73, 0x0), this['scene'][_0x509a46(0x178)](this['modelGroup']), window['heart3D'] = this['modelGroup'];
            window['centralSphere'] && window['centralSphere']['applyCentralHeartState'] && window['centralSphere']['applyCentralHeartState'](![]);
            _0x238262['animations'] && _0x238262['animations'][_0x509a46(0x17d)] ? (this['mixer'] = new _0x45e1f0['AnimationMixer'](this['model']), _0x238262['animations']['forEach']((_0x79c00d, _0x598f61) => {
                const _0x5d9ff2 = _0x509a46,
                    _0x17a0de = this['mixer']['clipAction'](_0x79c00d);
                _0x17a0de['setLoop'](_0x45e1f0['LoopRepeat']), _0x17a0de['clampWhenFinished'] = ![], _0x17a0de[_0x5d9ff2(0x187)]();
            })) : console['log'](_0x509a46(0x18d));
            const _0x14da1d = new _0x45e1f0[(_0x509a46(0x182))](0xffffff, 0x2, 0x3e8);
            _0x14da1d['position']['set'](0x0, 0xc8, 0x64), this['scene']['add'](_0x14da1d);
            const _0x26e22c = new _0x45e1f0['DirectionalLight'](0xffffff, 0x1);
            _0x26e22c[_0x509a46(0x188)]['set'](0x0, 0xc8, -0x64), this['scene'][_0x509a46(0x178)](_0x26e22c), console[_0x509a46(0x181)]('heart\x20loaded\x20successfully');
            try {
                document['dispatchEvent'](new CustomEvent('heart3d_ready'));
            } catch (_0x7c8366) {}
        }, _0x48218c => {}, _0x3a679a => {
            const _0xd516d9 = _0x4ba3;
            console[_0xd516d9(0x18b)]('Error\x20loading\x20model:', _0x3a679a), console[_0xd516d9(0x18b)](_0xd516d9(0x185), _0x3a679a['message']);
        });
    }[_0x642f51(0x17e)]() {
        const _0x5c6da4 = _0x642f51;
        if (this['mixer']) {
            const _0xb1cfbe = this['clock']['getDelta']();
            this['mixer']['update'](_0xb1cfbe);
        }
        if (this[_0x5c6da4(0x17b)]) {
            if (!this['mixer'] || !this['mixer'][_0x5c6da4(0x180)]) {
                const _0x6831fa = Date['now']() * 0.001;
                this[_0x5c6da4(0x17b)]['position']['y'] = 0x46 + Math[_0x5c6da4(0x176)](_0x6831fa) * 0x2;
            }
        }
    }
}