const desktop = {
    screens         :   {
            resolution  : 1080,
            displayType : "LED",
            touchEnabled: false
        },
    pointingDevice  :   "Wireless Mouse",
    ram             :   "32 GB",
    storage         :   "1 TB",
    wifi            :   false
}

const laptop = {
    screens         :   {
        resolution  : 1080,
        displayType : "LCD",
        touchEnabled: false
    },
    pointingDevice  :   "Trackpad",
    ram             :   "16 GB",
    storage         :   "512 GB",
    wifi            :   true,
    toggleWifi      :   function(wifi_status) {
        this.wifi = wifi_status;
    },
    wifiBands       :   function(wb_2_5g, wb_5g) {
        this.speed_wb_2_5g = wb_2_5g;
        this.speed_wb_5g = wb_5g;
    }
};

const phone = {
    screens         :   {
        resolution  : 1080,
        displayType : "Amoled",
        touchEnabled: true
    },
    pointingDevice  :   "Touch Screen",
    ram             :   "6 GB",
    storage         :   "128 GB",
    wifi            :   true
}

console.log("Desktop: ", desktop);
console.log("Laptop: ", laptop);
console.log("Phone: ", phone);