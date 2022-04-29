import {Color, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3, WebGLRenderer} from "three";
import {Map} from "./map/Map";
import {SkyboxScene} from "./skybox/SkyboxScene";
import {ControlsManager} from "./controls/ControlsManager";
import Stats from "./util/Stats";
import {alert, dispatchEvent, elementOffset, generateCacheHash, htmlToElement} from "./util/Utils";
import {TileManager} from "./map/TileManager";
import {HIRES_VERTEX_SHADER} from "./map/hires/HiresVertexShader";
import {HIRES_FRAGMENT_SHADER} from "./map/hires/HiresFragmentShader";
import {LOWRES_VERTEX_SHADER} from "./map/lowres/LowresVertexShader";
import {LOWRES_FRAGMENT_SHADER} from "./map/lowres/LowresFragmentShader";
import {CombinedCamera} from "./util/CombinedCamera";
import {CSS2DRenderer} from "./util/CSS2DRenderer";
import {MarkerSet} from "./markers/MarkerSet";

export class MapViewer {
  rootElement: Element;
  events: EventTarget;
  data: {
    map: null,
			camera: null,
			controlsManager: null,
			uniforms: {
				sunlightStrength: { value: 1 },
				ambientLight: { value: 0 },
				skyColor: { value: Color },
				hiresTileMap: {
					value: {
						map: null,
						size: TileManager.tileMapSize,
						scale: Vector2,
						translate: Vector2,
						pos: Vector2,
					}
				}
			},
			superSampling: 1,
			loadedCenter: Vector2,
			loadedHiresViewDistance: 200,
			loadedLowresViewDistance: 2000,
  };

  tileCacheHash: number;

  stats: Stats;
  renderer: WebGLRenderer;

  css2dRenderer: CSS2DRenderer;

  skyboxScene: SkyboxScene;

  _camera: CombinedCamera;
  skyboxCamera: PerspectiveCamera;

  _controlsManager: ControlsManager;

  raycaster: Raycaster;

  _map: Map;

  markers: MarkerSet;

  lastFrame: number;

  constructor (element: Element, events?: EventTarget);

  /**
	 * Initializes the root-element
	 */
  initializeRootElement(): void;
  /**
	 * Updates the render-resolution and aspect ratio based on the size of the root-element
	 */
	handleContainerResize(): void;

  /**
	 * Triggers an interaction on the screen (map), e.g. a mouse-click.
	 *
	 * This will first attempt to invoke the onClick() method on the Object3D (e.g. Markers) that has been clicked.
	 * And if none of those consumed the event, it will fire a <code>bluemapMapInteraction</code> event.
	 *
	 * @param screenPosition {Vector2} - Clicked position on the screen (usually event.x, event.y)
	 * @param data {object} - Custom event data that will be added to the interaction-event
	 */
  handleMapInteraction(screenPosition: Vector2, data?: Object): void;

  /**
	 * The render-loop to update and possibly render a new frame.
	 * @param now {number} the current time in milliseconds
	 */
  private renderLoop(now: number): void;

  /**
	 * Renders a frame
	 */
  private render(delta: number): void;

  /**
	 * Changes / Sets the map that will be loaded and displayed
	 */
  switchMap (map?: Map = null): Promise<void>;

  /**
	 * Loads the given area on the map (and unloads everything outside that area)
	 */
  loadMapArea(centerX: number, centerZ: number, hiresViewDistance?: number, lowresViewDistance?: number): void;

  updateLoadedMapArea(): void;
  clearTileCache(newTileCacheHash: number): void;

  get superSampling(): number;
  set superSampling(value: number);
  
  get camera(): CombinedCamera;
  set camera(value: CombinedCamera);

  get controlsManager(): ControlsManager;
  set controlsManager(value: ControlsManager);

  get map(): Map;
  set map(value: Map);
}
