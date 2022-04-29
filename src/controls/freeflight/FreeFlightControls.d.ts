import { Vector2 } from 'three';
import { KeyHeightControls } from './keyboard/KeyHeightControls';
import { KeyMoveControls } from './keyboard/KeyMoveControls';
import { MouseAngleControls } from './mouse/MouseAngleControls';
import { MouseRotateControls } from './mouse/MouseRotateControls';
import { TouchPanControls } from './touch/TouchPanControls';
import { ControlsManager } from '../ControlsManager';
import { Map } from '../../map/Map';

export class FreeFlightControls {
  data: {};
  hammer: HammerManager;

   keyMove: KeyMoveControls;
   keyHeight: KeyHeightControls;
   mouseRotate: MouseRotateControls;
   mouseAngle: MouseAngleControls;
   touchPan: TouchPanControls;
   keyMove: KeyMoveControls;
   keyHeight: KeyHeightControls;
   mouseRotate: MouseRotateControls;
   mouseAngle: MouseAngleControls;
   touchPan: TouchPanControls;

   started: boolean;

   clickStart: Vector2;
   moveSpeed: number;

   animationTargetHeight: number;

  constructor (public target: Element);

  start (manager: ControlsManager): void;
  update (delta: number, map: Map): void;
  initializeHammer (): void;
  onContextMenu: (evt: Event) => void;
  onMouseDown: (evt: Event) => void;
  onMouseUp: (evt: Event) => void;
  onWheel: (evt: Event) => void;
}