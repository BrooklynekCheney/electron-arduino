'use strict'
import { BleClient } from '@capacitor-community/bluetooth-le'
import { ref } from 'vue'

// const { BrowserWindow } = require('electron');


// let win = null


export function useBluetoothScanner () {
  const scanResults = ref([])
  const scanning = ref(false)
  const bluetoothDeviceList = []
//   const deviceIds = []

  async function scan () {
    await BleClient.initialize()
    console.log(navigator.bluetooth.requestDevice)
    console.log(bluetoothDeviceList)
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
  .then((device) => {
    console.log(`Name: ${device.name}`);
    // Do something with the device.
  })
    // console.log(BleClient.getDevices(deviceIds))
    // let getDevices = BleClient.getDevices(deviceIds)
    // getDevices.then(function(result) {
    //     console.log(result) // "Some User token"
    //  })
    //  Promise.all()
    //  await function  createWindow () {
    //       win = new BrowserWindow({
    //         width: 800,
    //         height: 600,
    //         webPreferences: {
    //           nodeIntegration: true,
    //           contextIsolation: false,
    //         },
    //       });

    //     }
    // win.webContents.on('select-bluetooth-device', (event, deviceList) => {
    //   event.preventDefault()
    //   console.log(deviceList)
    //   // let bluetoothDeviceList = deviceList
     

    //   win.webContents.send('channelForBluetoothDeviceList')
    // })
    if (navigator.bluetooth && navigator.bluetooth.requestDevice) {
      try {
        navigator.bluetooth.requestDevice({
          acceptAllDevices: true

          // Optional filters:
          //   filters: [{services: ['battery_service']}]
        })
        // win.webContents.on('select-bluetooth-device', (event, deviceList) => {
        //   event.preventDefault(); //important, otherwise first available device will be selected
        //   console.log(deviceList); })

        console.log('Scan st')

        // Stop scanning after a timeout (optional)
        setTimeout(async () => {
          await BleClient.stopLEScan()
          console.log('Scan stopped')
        }, 10000) // Stop after 10 seconds
        console.log('Scan started:', scan)
      } catch (error) {
        console.error('Error during scanning:', error)
      }
    } else {
      // Function does not exist, handle accordingly
      console.warn('requestLEScan is not supported in this browser.')
      // Provide alternative functionality or inform the user
    }
  }

  return {
    scanResults,
    scanning,
    scan
    // selectFromDevicePicker,
    // closeDevicePicker,
    // cancelDevicePicker,
    // discoverDevice,
    // startDevicepicker,
    // createWindow,
  }
}
