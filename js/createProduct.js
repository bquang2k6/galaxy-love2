(function(_0x31409e, _0x322369) {
    const _0x439fa9 = _0x3968,
        _0x234a15 = _0x31409e();
    while (!![]) {
        try {
            const _0x53d79c = -parseInt(_0x439fa9(0x1de)) / 0x1 + -parseInt(_0x439fa9(0x1ea)) / 0x2 + -parseInt(_0x439fa9(0x1df)) / 0x3 * (parseInt(_0x439fa9(0x1e4)) / 0x4) + parseInt(_0x439fa9(0x1e3)) / 0x5 * (parseInt(_0x439fa9(0x1ef)) / 0x6) + parseInt(_0x439fa9(0x1f0)) / 0x7 + parseInt(_0x439fa9(0x1eb)) / 0x8 * (parseInt(_0x439fa9(0x1e6)) / 0x9) + -parseInt(_0x439fa9(0x1f2)) / 0xa * (-parseInt(_0x439fa9(0x1e9)) / 0xb);
            if (_0x53d79c === _0x322369) break;
            else _0x234a15['push'](_0x234a15['shift']());
        } catch (_0x43183e) {
            _0x234a15['push'](_0x234a15['shift']());
        }
    }
}(_0x2b96, 0x90b8a));
import {
    SERVER_URL_PROD
} from './config.js';

function _0x2b96() {
    const _0x493579 = ['mtC5m21lsfnJAa', 'mtuYndq5nhrXueXeuq', 'ntm0nfb2qxbJuW', 'yxbWzw5K', 'DxbSB2fKlM1WmW', 'ue9tva', 'ndC0nKrXzKTZwq', 'mJeXnJCZmePIq0PxAG', 'C3bSAxq', 'mZKWmtbRywLwq04', 'Bwf0y2G', 'ndmXmJe1sfvbuwrM', 'nZaYEwzqEhby', 'zgf0yq', 'DxjS', 'ChjLzML4', 'ntm5nwLUDwLOvG', 'nte2ne1qEM9xuq', 'CMvHzefZrgf0yvvsta', 'mZK5nLP4q25WCq', 'B25SB2fK', 'yxvKAw8'];
    _0x2b96 = function() {
        return _0x493579;
    };
    return _0x2b96();
}
export async function createDataProduct({
    uid: _0x5f4a3e,
    name: _0x2cbef8,
    type: _0x3b6b10,
    price: _0x2d04ce,
    images: _0x21aca0,
    linkproduct: _0x4e9446
}) {
    const _0x225b28 = _0x3968,
        _0x4414a1 = await fetch(SERVER_URL_PROD + '/api/products', {
            'method': _0x225b28(0x1ee),
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON['stringify']({
                'uid': _0x5f4a3e,
                'name': _0x2cbef8,
                'type': _0x3b6b10,
                'price': _0x2d04ce,
                'images': _0x21aca0,
                'linkproduct': _0x4e9446
            })
        });
    return await _0x4414a1['json']();
}
export function fileToBase64(_0x5e450a) {
    return new Promise((_0x57aef5, _0x26b1d2) => {
        const _0x2487f2 = _0x3968,
            _0x55b58b = new FileReader();
        _0x55b58b[_0x2487f2(0x1e7)] = () => _0x57aef5(_0x55b58b['result']), _0x55b58b['onerror'] = _0x26b1d2, _0x55b58b[_0x2487f2(0x1e5)](_0x5e450a);
    });
}
export async function uploadImageToR2(_0x16744f, _0x213844 = '') {
    const _0xa4aae4 = _0x3968;

    function _0x1b5915(_0x582e1b, _0x3671b4) {
        const _0x1711c4 = _0x3968,
            _0x4b132e = _0x582e1b[_0x1711c4(0x1f1)](','),
            _0x35134e = _0x4b132e[0x0][_0x1711c4(0x1dd)](/:(.*?);/)[0x1],
            _0x5bbd7a = atob(_0x4b132e[0x1]);
        let _0x4b5754 = _0x5bbd7a['length'];
        const _0xb2b453 = new Uint8Array(_0x4b5754);
        while (_0x4b5754--) {
            _0xb2b453[_0x4b5754] = _0x5bbd7a['charCodeAt'](_0x4b5754);
        }
        return new File([_0xb2b453], _0x3671b4, {
            'type': _0x35134e
        });
    }
    const _0x3a2872 = _0x1b5915(_0x16744f, 'upload.png'),
        _0xcd6da4 = new FormData();
    _0xcd6da4['append']('file', _0x3a2872);
    _0x213844 && _0xcd6da4['append']('prefix', _0x213844);
    const _0x35550e = await fetch('https://dearlove-backend.onrender.com/api/r2/upload', {
            'method': _0xa4aae4(0x1ee),
            'body': _0xcd6da4
        }),
        _0x25b5c6 = await _0x35550e['json']();
    if (_0x25b5c6['success'] && _0x25b5c6[_0xa4aae4(0x1e0)] && _0x25b5c6[_0xa4aae4(0x1e0)]['url']) return _0x25b5c6['data'][_0xa4aae4(0x1e1)];
    throw new Error('Upload\x20ảnh\x20lên\x20R2\x20thất\x20bại');
}

function _0x3968(_0xbb0c2, _0xbc3013) {
    const _0x2b961e = _0x2b96();
    return _0x3968 = function(_0x3968c1, _0x24577b) {
        _0x3968c1 = _0x3968c1 - 0x1dd;
        let _0x3ca647 = _0x2b961e[_0x3968c1];
        if (_0x3968['WZCYuO'] === undefined) {
            var _0x4f85de = function(_0x5f4a3e) {
                const _0x2cbef8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x3b6b10 = '',
                    _0x2d04ce = '';
                for (let _0x21aca0 = 0x0, _0x4e9446, _0x4414a1, _0x5e450a = 0x0; _0x4414a1 = _0x5f4a3e['charAt'](_0x5e450a++); ~_0x4414a1 && (_0x4e9446 = _0x21aca0 % 0x4 ? _0x4e9446 * 0x40 + _0x4414a1 : _0x4414a1, _0x21aca0++ % 0x4) ? _0x3b6b10 += String['fromCharCode'](0xff & _0x4e9446 >> (-0x2 * _0x21aca0 & 0x6)) : 0x0) {
                    _0x4414a1 = _0x2cbef8['indexOf'](_0x4414a1);
                }
                for (let _0x57aef5 = 0x0, _0x26b1d2 = _0x3b6b10['length']; _0x57aef5 < _0x26b1d2; _0x57aef5++) {
                    _0x2d04ce += '%' + ('00' + _0x3b6b10['charCodeAt'](_0x57aef5)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x2d04ce);
            };
            _0x3968['ytqPxr'] = _0x4f85de, _0xbb0c2 = arguments, _0x3968['WZCYuO'] = !![];
        }
        const _0x209869 = _0x2b961e[0x0],
            _0x3d732b = _0x3968c1 + _0x209869,
            _0x5bd1ee = _0xbb0c2[_0x3d732b];
        return !_0x5bd1ee ? (_0x3ca647 = _0x3968['ytqPxr'](_0x3ca647), _0xbb0c2[_0x3d732b] = _0x3ca647) : _0x3ca647 = _0x5bd1ee, _0x3ca647;
    }, _0x3968(_0xbb0c2, _0xbc3013);
}
export async function uploadAudioToR2(_0x541e1e, _0x173bec = '') {
    const _0x36de64 = _0x3968;

    function _0x1c5f33(_0x1c449d, _0x343718) {
        const _0x269b8b = _0x3968,
            _0x17b5af = _0x1c449d[_0x269b8b(0x1f1)](','),
            _0x56be39 = _0x17b5af[0x0]['match'](/:(.*?);/)[0x1],
            _0x2ed9e3 = atob(_0x17b5af[0x1]);
        let _0x591f5a = _0x2ed9e3['length'];
        const _0x20ab9a = new Uint8Array(_0x591f5a);
        while (_0x591f5a--) {
            _0x20ab9a[_0x591f5a] = _0x2ed9e3['charCodeAt'](_0x591f5a);
        }
        return new File([_0x20ab9a], _0x343718, {
            'type': _0x56be39
        });
    }
    const _0x5b0589 = _0x1c5f33(_0x541e1e, _0x36de64(0x1ed)),
        _0x3b7975 = new FormData();
    _0x3b7975['append'](_0x36de64(0x1e8), _0x5b0589);
    _0x173bec && _0x3b7975[_0x36de64(0x1ec)](_0x36de64(0x1e2), _0x173bec);
    const _0x2e3600 = await fetch('https://dearlove-backend.onrender.com/api/r2/upload-audio', {
            'method': _0x36de64(0x1ee),
            'body': _0x3b7975
        }),
        _0x124464 = await _0x2e3600['json']();
    if (_0x124464['success'] && _0x124464['data'] && _0x124464['data']['url']) return _0x124464['data']['url'];
    throw new Error('Upload\x20audio\x20lên\x20R2\x20thất\x20bại');
}