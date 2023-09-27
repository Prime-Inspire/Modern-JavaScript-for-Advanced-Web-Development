window.wifiSpeed = 200;

const myLaptop = {
    name:   "Lenovo Laptop",
    color:  "Black",
    wifiSpeed:  1000,
    newWifiSpeed: function(wifiSpeed) {
        console.log("this.wifiSpeed in method: ", this.wifiSpeed);
        this.wifiSpeed = wifiSpeed;
        console.log("this.wifiSpeed after the update: ", this.wifiSpeed);
        // (function() {
        //     console.log("this.wifiSpedd is nested function: ", this.wifiSpeed);
        // })();
        (() => {
            console.log("this.wifiSpedd is nested function: ", this.wifiSpeed);
        })();
    }
};

console.log(myLaptop.newWifiSpeed(1500));