<script setup>
import { mdiRefresh } from '@quasar/extras/mdi-v7'
// import { useLocalStorage } from '@vueuse/core'
import { useBluetoothScanner } from './/../composables/useBluetoothScanner'

const {
  scan,
  scanning
} = useBluetoothScanner()


</script>


<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Devices
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          aria-label="Home"
          @click="refreshSerialPorts()"
          icon="refresh"
        />
      </q-toolbar>


      <q-btn
          :loading="scanning"
          round
          color="white"
          text-color="grey-10"
          size="sm"
          :icon="mdiRefresh"
          @click="scan()"
        />
    </q-header>
 
    <q-page-container>
      <DevicesList ref="devicesList" />
    </q-page-container>
  </q-layout>
</template>

<!-- <script>
import DevicesList from '../components/DevicesList.vue'
import { useBluetoothScanner } from 'src/composables/useBluetoothScanner'

const {
  scan,
  scanResults,
  scanning
} = useBluetoothScanner()


export default {
  name: 'LayoutDefault',

  components: {
    DevicesList
  },
  methods: {
    refreshSerialPorts() {
      this.$refs.devicesList.listSerialPorts();
    }
  }

}
</script> -->
