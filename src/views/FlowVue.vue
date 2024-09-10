<script setup lang="ts">
import {onMounted, ref} from "vue";
import Modeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import '@bpmn-io/properties-panel/assets/properties-panel.css';

import {initValue} from '@/flowInitValue'
import customTranslate from "@/infrastructure/bpmn/customTranslate";


const canvasRef = ref();
const panel = ref();

onMounted(() => {

  const modeler = new Modeler({
    container: canvasRef.value,
    propertiesPanel: {
      parent: panel.value
    },
    additionalModules:[
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      {
        translate: [ 'value', customTranslate ]
      }
    ]
  });

  modeler.importXML(initValue).then(value => {
    console.log(`${value}：加载成功`)
  }).catch(reason => {
    console.error(reason);
    console.log("加载失败")
  });
})

</script>

<template>

  <div class="containers">
    <div class="canvas" ref="canvasRef"></div>
    <div class="panel" id="js-properties-panel" ref="panel"></div>  <!--属性面板将通过该元素呈现到其中-->
  </div>

</template>

<style scoped>
/*@import "bpmn-js/dist/assets/bpmn-js.css";
@import "bpmn-js/dist/assets/diagram-js.css";*/

.containers {
  height: 500px;
  width: 500px;
}

.canvas {
  height: 80%;
  width: 80%;
}
</style>
