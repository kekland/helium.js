function HeliumMouse() {
    this.Init = () => {
        window.helium.mouse = {}
        window.helium.mouse.position = {}
        window.helium.mouse.buttons = []
        document.onmousemove = (event) => {
            var dot, eventDoc, doc, body, pageX, pageY;

            event = event || window.event; // IE-ism

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }

            window.helium.mouse.position.x = event.pageX
            window.helium.mouse.position.y = event.pageY
        }

        document.onmousedown = (event) => {
            window.helium.mouse.buttons[event.which] = true
        }
        document.onmouseup = (event) => {
            window.helium.mouse.buttons[event.which] = false
        }
    }
}