class Computer {
    constructor(
        // Parameters
        name,
        processor,
        ram,
        storage,
        os,
        wifi,
        monitor,
        wifiBand2g,
        wifiBand5g,
        image
    ) {
        // Properties
        this.name = name;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.os = os;
        this.wifi = wifi;
        this.monitor = monitor;
        this.wifiSpeed = {
            lowSpeed: wifiBand2g,
            highSpeed: wifiBand5g
        };
        this.image = image;
    }
    toggleWifi(wifiStatus) {
        this.wifi = wifiStatus;
    }
    newWifiSpeed(upgrade2g, upgrade5g) {
        this.wifiBand2g = upgrade2g;
        this.wifiBand5g = upgrade5g;
    }
}

export default Computer;