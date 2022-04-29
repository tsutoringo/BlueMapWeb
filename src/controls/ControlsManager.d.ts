import { Vector3 } from 'three';
import { MapViewer } from '../MapViewer';
import { CombinedCamera } from '../util/CombinedCamera';
import { Map } from '../map/Map';

export interface ControlsLike {
  start: (controls: ControlsManager) => void;
  stop: () => void;
  update: (deltaTime: number, map: Map) => void;
}

export class ControlsManager {

  private _controls: ControlsLike;
  private _camera: MapViewer;

  lastPosition: Vector3;
  lastRotation: number;
  lastAngle: number;
  lastDistance: number;
  lastOrtho: number;
  lastTilt: number;

  lastMapUpdatePosition: Vector3;
  averageDeltaTime: number;


  data: {
    mapViewer: MapViewer,
    camera: CombinedCamera,
    controls: controls,
    position: Vector3,
    rotation: 0,
    angle: 0,
    tilt: 0
  };

  /**
	 * @param mapViewer {MapViewer}
	 * @param camera {CombinedCamera}
	 */
  constructor(mapViewer: MapViewer, camera: CombinedCamera);

  update (deltaTime: number, map: Map): void;
  updateCamera (): void;

  /**
	 * Triggers an interaction on the screen (map), e.g. a mouse-click
	 * @param screenPosition {THREE.Vector2} - Clicked position on the screen (usually event.x, event.y)
	 * @param data {object} - Custom event data that will be added to the interaction-event
	 */
  handleMapInteraction (screenPosition: Vector2, data: object): void;
  isValueChanged (): boolean;

  get ortho (): number;
  set ortho (ortho: number);

  get disntance (): number;
  set disntance (distance: number);

  set controls (controls: ControlsLike);
  get controls (): ControlsLike;

  get mapViewer (): MapViewer;
  set mapViewer (value: MapViewer);

  get camera (): CombinedCamera;
  set camera (value: CombinedCamera);

  get position (): Vector3;
  set position (value: Vector3);

  get rotatetion (): number;
  set rotation (value: number);

  get angle (): number;
  set angle (value: number);

  get tilt (): number;
  set tilt (value: number);
}
