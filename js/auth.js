const _0x51327b = _0x5405;
(function(_0x2c603b, _0x4f0b24) {
    const _0x56362e = _0x5405,
        _0x2ba858 = _0x2c603b();
    while (!![]) {
        try {
            const _0x4abc98 = parseInt(_0x56362e(0x1b2)) / 0x1 * (parseInt(_0x56362e(0x1b6)) / 0x2) + parseInt(_0x56362e(0x1b8)) / 0x3 * (-parseInt(_0x56362e(0x19b)) / 0x4) + parseInt(_0x56362e(0x1a3)) / 0x5 + parseInt(_0x56362e(0x199)) / 0x6 + parseInt(_0x56362e(0x1a7)) / 0x7 * (parseInt(_0x56362e(0x196)) / 0x8) + parseInt(_0x56362e(0x1a6)) / 0x9 * (-parseInt(_0x56362e(0x1b3)) / 0xa) + parseInt(_0x56362e(0x1ad)) / 0xb;
            if (_0x4abc98 === _0x4f0b24) break;
            else _0x2ba858['push'](_0x2ba858['shift']());
        } catch (_0x5ffd89) {
            _0x2ba858['push'](_0x2ba858['shift']());
        }
    }
}(_0x2708, 0x648ad));
import {
    SERVER_URL_PROD
} from './config.js';

function _0x2708() {
    const _0x4218ee = ['DwLK', 'z2v0rwXLBwvUDej5swq', 'mKXhEwjPsa', 'C2LNBK91Da', 'm0nvse9iDW', 'C3r5Bgu', 'oeLODfziDa', 'pgrPDIbJBgfZCZ0IBg9HzgLUzYi+pc9KAxy+imsqyw5NimsrXinUzYbUAog6RxaUlI4', 'Ahr0Chm6lY92AweUCgXHy2vOB2XKzxiUy29TlZqWEdqWlZy2n2vLys9MzMzMzMy/Dgv4Dd3WN5gK', 'nZC2odm4CeTcCMvP', 'C3bOzxjLx3jLywr5', 'mZiZntK4oePVzgP2ta', 'zNvUy3rPB24', 'C3jJ', 'C2LNBKLUv2L0AfbVChvW', 'yxbWCW', 'zw1HAwW', 'mZKXmZC5mda4nZK1', 'Bg9NB3v0qNrU', 'nZC0mJy1DxfQD1Lb', 'Aw5Uzxjive1m', 'BM9Uzq', 'ntG2nZfzvMjite4', 'odGXmJC5v21ysgXf', 'y29UDgfPBNm', 'CMvTB3zLsxrLBq', 'zgLZCgXHEq', 'DgfYz2v0', 'ywrKrxzLBNrmAxn0zw5LCG', 'mtmZmdCWnZrVD0fbruO', 'z2v0rhLUyw1Py1bYAwnL', 'l2fWAs9HDxrOl2XVz2LU', 'yMXVy2S', 'BwvZC2fNzq', 'mZa0oteZuuvdzLf0', 'mta4mhjUB0vPtG'];
    _0x2708 = function() {
        return _0x4218ee;
    };
    return _0x2708();
}
const firebaseConfig = {
    'apiKey': 'AIzaSyDN3YxOpqxqfBQgHOvtFk6JJvztlV3vTH8',
    'authDomain': 'deargift-e6488.firebaseapp.com',
    'projectId': 'deargift-e6488',
    'storageBucket': 'deargift-e6488.appspot.com',
    'messagingSenderId': _0x51327b(0x1a1),
    'appId': '1:391379008795:web:4b1c98f17f824690e2e7be',
    'measurementId': 'G-VGBLRMQM9L'
};
!firebase[_0x51327b(0x19f)]['length'] && firebase['initializeApp'](firebaseConfig);
const googleLoginBtn = document['getElementById']('googleLoginBtn'),
    logoutBtn = document['getElementById'](_0x51327b(0x1a2)),
    userLogoContainer = document[_0x51327b(0x1b5)]('userLogoContainer'),
    userLogo = document['getElementById']('userLogo'),
    userDropdown = document['getElementById']('userDropdown'),
    userAvatar = document['getElementById']('userAvatar'),
    userName = document['getElementById']('userName'),
    userEmail = document['getElementById']('userEmail');
googleLoginBtn && googleLoginBtn['addEventListener']('click', async () => {
    const _0x1d1de1 = _0x51327b,
        _0x1b7a08 = googleLoginBtn[_0x1d1de1(0x1a4)];
    googleLoginBtn['innerHTML'] = _0x1d1de1(0x197), googleLoginBtn['disabled'] = !![];
    try {
        const _0x129460 = new firebase['auth']['GoogleAuthProvider']();
        _0x129460['addScope']('email');
        const _0x1b2c54 = await firebase['auth']()[_0x1d1de1(0x19e)](_0x129460),
            _0x16b2a0 = await _0x1b2c54['user']['getIdToken']();
        await fetch(SERVER_URL_PROD + _0x1d1de1(0x1af), {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON['stringify']({
                'idToken': _0x16b2a0
            })
        });
    } catch (_0x17495d) {
        alert('❌\x20Đăng\x20nhập\x20thất\x20bại:\x20' + _0x17495d['message']);
    } finally {
        googleLoginBtn['innerHTML'] = _0x1b7a08, googleLoginBtn['disabled'] = ![];
    }
});

function _0x5405(_0x4c455a, _0x1dd31f) {
    const _0x27089d = _0x2708();
    return _0x5405 = function(_0x5405b0, _0xa1294f) {
        _0x5405b0 = _0x5405b0 - 0x196;
        let _0x410495 = _0x27089d[_0x5405b0];
        if (_0x5405['SEIzLv'] === undefined) {
            var _0x37eea8 = function(_0x1b7a08) {
                const _0x129460 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x1b2c54 = '',
                    _0x16b2a0 = '';
                for (let _0x17495d = 0x0, _0x64dc08, _0x348e22, _0x42da8e = 0x0; _0x348e22 = _0x1b7a08['charAt'](_0x42da8e++); ~_0x348e22 && (_0x64dc08 = _0x17495d % 0x4 ? _0x64dc08 * 0x40 + _0x348e22 : _0x348e22, _0x17495d++ % 0x4) ? _0x1b2c54 += String['fromCharCode'](0xff & _0x64dc08 >> (-0x2 * _0x17495d & 0x6)) : 0x0) {
                    _0x348e22 = _0x129460['indexOf'](_0x348e22);
                }
                for (let _0x22eb86 = 0x0, _0x4a4537 = _0x1b2c54['length']; _0x22eb86 < _0x4a4537; _0x22eb86++) {
                    _0x16b2a0 += '%' + ('00' + _0x1b2c54['charCodeAt'](_0x22eb86)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x16b2a0);
            };
            _0x5405['EaxTpa'] = _0x37eea8, _0x4c455a = arguments, _0x5405['SEIzLv'] = !![];
        }
        const _0x53cc51 = _0x27089d[0x0],
            _0x1c142b = _0x5405b0 + _0x53cc51,
            _0x47b5dd = _0x4c455a[_0x1c142b];
        return !_0x47b5dd ? (_0x410495 = _0x5405['EaxTpa'](_0x410495), _0x4c455a[_0x1c142b] = _0x410495) : _0x410495 = _0x47b5dd, _0x410495;
    }, _0x5405(_0x4c455a, _0x1dd31f);
}
logoutBtn && logoutBtn['addEventListener']('click', async () => {
    const _0xacd4d4 = _0x51327b;
    try {
        await firebase['auth']()[_0xacd4d4(0x1b7)]();
    } catch (_0x64dc08) {
        alert('❌\x20Đăng\x20xuất\x20thất\x20bại:\x20' + _0x64dc08[_0xacd4d4(0x1b1)]);
    }
});
userLogo && userLogo['addEventListener']('click', () => {
    const _0x34c57f = _0x51327b;
    if (userDropdown) {
        const _0x348e22 = userDropdown['style']['display'] === 'block';
        userDropdown['style']['display'] = _0x348e22 ? _0x34c57f(0x1a5) : _0x34c57f(0x1b0);
    }
});
document['addEventListener']('click', _0x42da8e => {
    const _0x1a86e0 = _0x51327b;
    if (userDropdown && userDropdown['style'][_0x1a86e0(0x1aa)] === _0x1a86e0(0x1b0)) {
        const _0x22eb86 = userLogoContainer[_0x1a86e0(0x1a8)](_0x42da8e['target']) || userDropdown['contains'](_0x42da8e[_0x1a86e0(0x1ab)]);
        !_0x22eb86 && (userDropdown['style'][_0x1a86e0(0x1aa)] = 'none');
    }
}), document[_0x51327b(0x1ac)](_0x51327b(0x19a), () => {
    const _0x289bc6 = _0x51327b,
        _0x4a4537 = firebase['auth']()['currentUser'];
    _0x4a4537 && typeof loadUserVouchers === 'function' && typeof window[_0x289bc6(0x1ae)] === 'function' && loadUserVouchers(window['getDynamicPrice']);
}), firebase['auth']()['onAuthStateChanged'](_0x27982d => {
    const _0x4ac7f4 = _0x51327b;
    if (_0x27982d) {
        localStorage['setItem']('user_uid', _0x27982d[_0x4ac7f4(0x1b4)]), localStorage['setItem']('customerEmail', _0x27982d[_0x4ac7f4(0x1a0)]);
        if (googleLoginBtn) googleLoginBtn[_0x4ac7f4(0x1b9)][_0x4ac7f4(0x1aa)] = 'none';
        if (userLogoContainer) userLogoContainer['style']['display'] = 'block';
        if (userLogo) userLogo['src'] = _0x27982d['photoURL'] || _0x4ac7f4(0x198);
        if (userAvatar) userAvatar['src'] = _0x27982d['photoURL'] || 'https://via.placeholder.com/40x40/667eea/ffffff?text=👤';
        if (userName) userName['textContent'] = _0x27982d['displayName'] || '';
        if (userEmail) userEmail['textContent'] = _0x27982d[_0x4ac7f4(0x1a0)] || '';
        typeof loadUserVouchers === _0x4ac7f4(0x19c) && setTimeout(() => {
            typeof window['getDynamicPrice'] === 'function' ? loadUserVouchers(window['getDynamicPrice']) : loadUserVouchers(() => 0x0);
        }, 0x1f4);
    } else {
        localStorage[_0x4ac7f4(0x1a9)]('user_uid'), localStorage[_0x4ac7f4(0x1a9)]('customerEmail');
        if (googleLoginBtn) googleLoginBtn['style']['display'] = 'flex';
        if (userLogoContainer) userLogoContainer[_0x4ac7f4(0x1b9)]['display'] = 'none';
        if (userDropdown) userDropdown['style']['display'] = 'none';
        if (userLogo) userLogo['src'] = '';
        if (userAvatar) userAvatar[_0x4ac7f4(0x19d)] = '';
        if (userName) userName['textContent'] = '';
        if (userEmail) userEmail['textContent'] = '';
    }
});