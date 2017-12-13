
function HeliumKeyboard(keyPressedCallback) {
    this.callback = keyPressedCallback

    this.isKeyPressed = (key) => {
        return window.helium.keyboard.pressedKeys[key]
    }

    this.changeCallback = (callback) => {
        this.callback = callback
    }

    this.Init = () => {
        window.helium.keyboard = {}
        window.helium.keyboard.keys = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,

            Shift: 16,
            Ctrl: 17,
            Alt: 18,

            PauseBreak: 19,
            CapsLock: 20,
            Escape: 27,
            Space: 32,

            PgUp: 33,
            PgDn: 44,
            End: 35,
            Home: 36,

            LeftArrow: 37,
            UpArrow: 38,
            RightArrow: 39,
            DownArrow: 40,

            Insert: 45,
            Delete: 46,

            Digit0: 48,
            Digit1: 49,
            Digit2: 50,
            Digit3: 51,
            Digit4: 52,
            Digit5: 53,
            Digit6: 54,
            Digit7: 55,
            Digit8: 56,
            Digit9: 57,

            KeyA: 65,
            KeyB: 66,
            KeyC: 67,
            KeyD: 68,
            KeyE: 69,
            KeyF: 70,
            KeyG: 71,
            KeyH: 72,
            KeyI: 73,
            KeyJ: 74,
            KeyK: 75,
            KeyL: 76,
            KeyM: 77,
            KeyN: 78,
            KeyO: 79,
            KeyP: 80,
            KeyQ: 81,
            KeyR: 82,
            KeyS: 83,
            KeyT: 84,
            KeyU: 85,
            KeyV: 86,
            KeyW: 87,
            KeyX: 88,
            KeyY: 89,
            KeyZ: 90,

            LeftMetaKey: 91,
            RightMetaKey: 92,

            Select: 93,

            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Number8: 104,
            Number9: 105,

            NumpadMultiply: 106,
            NumpadAdd: 107,
            NumpadSubtract: 109,
            NumpadPoint: 110,
            NumpadDivide: 111,

            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F8: 118,
            F9: 119,
            F10: 120,
            F11: 121,
            F12: 122,

            NumLock: 144,
            ScrollLock: 145,

            SemiColon: 186,
            Equal: 187,
            Comma: 188,
            Dash: 189,
            Period: 190,

            ForwardSlash: 191,
            GraveAccent: 192,

            OpenBracket: 219,
            CloseBracket: 221,

            BackSlash: 220,
            SingleQuote: 222
        }

        window.helium.keyboard.pressedKeys = []

        document.addEventListener('keydown', (event) => {
            window.helium.keyboard.pressedKeys[event.which] = true
        })
    
        document.addEventListener('keyup', (event) => {
            window.helium.keyboard.pressedKeys[event.which] = false
        })
    }
}