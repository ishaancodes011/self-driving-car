class Controls {
    constructor(type) {
        this.type = type;
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        switch(this.type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }
    }

    #addKeyboardListeners() {
        document.onkeydown = (evt) => {
            switch(evt.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                
                case "ArrowRight":
                    this.right = true;
                    break;
                
                case "ArrowUp":
                    this.forward = true;
                    break;
                
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }
        document.onkeyup = (evt) => {
            switch(evt.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                
                case "ArrowRight":
                    this.right = false;
                    break;
                
                case "ArrowUp":
                    this.forward = false;
                    break;
                
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }
    }
}