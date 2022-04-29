import { Vector2, Vector3 } from 'three';
import { ControlsManager } from '../ControlsManager';
import { MouseAngleControls } from '../freeflight/mouse/MouseAngleControls';
import { KeyAngleControls } from './keyboard/KeyAngleControls';
import { KeyMoveControls } from './keyboard/KeyMoveControls';
import { KeyRotateControls } from './keyboard/KeyRotateControls';
import { KeyZoomControls } from './keyboard/KeyZoomControls';
import { MapHeightControls } from './MapHeightControls';
import { MouseMoveControls } from './mouse/MouseMoveControls';
import { MouseRotateControls } from './mouse/MouseRotateControls';
import { MouseZoomControls } from './mouse/MouseZoomControls';
import { TouchAngleControls } from './touch/TouchAngleControls';
import { TouchMoveControls } from './touch/TouchMoveControls';
import { TouchRotateControls } from './touch/TouchRotateControls';
import { TouchZoomControls } from './touch/TouchZoomControls';

export class MapControls {
  static _beforeMoveTemp: Vector3;

  data: {
    followingPlayer: object | null;
  }

  manager: ControlsManager;

  hammer: HammerManager;

  //controls
  mouseMove: MouseMoveControls;
  mouseRotate: MouseRotateControls;
  mouseAngle: MouseAngleControls;
  mouseZoom: MouseZoomControls;

  keyMove: KeyMoveControls;
  keyRotate: KeyRotateControls;
  keyAngle: KeyAngleControls;
  keyZoom: KeyZoomControls;

  touchMove: TouchMoveControls;
  touchRotate: TouchRotateControls;
  touchAngle: TouchAngleControls;
  touchZoom: TouchZoomControls;

  mapHeight: MapHeightControls;

  lastTap: number;
  lastTapCenter: Vector2;

  constructor (public rootELement: Element);

  start (manager: ControlsManager): void;
  stop (): void;
  update (delta: number, map: Map): void;
  reset (): void;
  getMaxPerspectiveAngleForDistance: (distance: number) => number;
  initializeHammer (): void;
  followPlayerMarker (marker: object): void;
  stopFollowingPlayerMarker (): void;
  onContextMenu (evt: Event): void;
  onTap (evt: event): void;
}
