import { DemoInputMultiDrag } from './input/multitouch/multi-drag';
import { DemoPointerDown } from './input/multitouch/pointer-down';
import { DemoDPad01 } from './joy-controller/dpad01';


export const input_multitouch = [
    DemoInputMultiDrag, 
    DemoPointerDown,
    DemoDPad01
];

export * from './input/multitouch/multi-drag';
export * from './input/multitouch/pointer-down';

export * from './joy-controller/dpad01';

