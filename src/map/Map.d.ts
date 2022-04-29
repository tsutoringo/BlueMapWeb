import { Color, Raycaster, ShaderMaterial } from 'three';
import { Tile } from './Tile';

export class Map {
  events: EventTarget;
  data: {
    id: string,
    dataUrl: string,
    settingsUrl: string,
    texturesUrl: string,
    name: string,
    world: string,
    startPos: {x: number, z: number},
    skyColor: Color,
    ambientLight: number,
    hires: {
      tileSize: {x: number, z: number},
      scale: {x: number, z: number},
      translate: {x: number, z: number}
    },
    lowres: {
      tileSize: {x: number, z: number},
      scale: {x: number, z: number},
      translate: {x: number, z: number}
    }
  };

  raycaster: Raycaster;

  constructor (id: string, detaURL: string, settingsUrl: string, texturesUrl: string, events?: EventTarget = null);

  /**
	 * Loads textures and materials for this map so it is ready to load map-tiles
	 */
   load(hiresVertexShader: string, hiresFragmentShader: string, lowresVertexShader: string, lowresFragmentShader: string, uniforms: object, tileCacheHash: number): Promise<void>;

   /**
	 * Loads the settings of this map
	 */
  loadSettings(): Promise<void>;

  onTileLoad: (layer: any) => (tile: Tile) => void;
  onTileUnload: (layer: any) => (tile: Tile) => void;

  loadMapArea(x: number, z: number, hiresViewDistance: number, lowresViewDistance: number): void;

  /**
   * Loads the settings.json file for this map
   */
  loadSettingsFile(): Promise<void>;

  /**
	 * Loads the textures.json file for this map
	 */
  loadTexturesFile(): Promise<void>;

  /**
	 * Creates a hires Material with the given textures
	 * @param vertexShader {string}
	 * @param fragmentShader {string}
	 * @param uniforms {object}
	 * @param textures {object} the textures-data
	 * @returns {ShaderMaterial[]} the hires Material (array because its a multi-material)
	 */
  createHiresMaterial(vertexShader: string, fragmentShader: string, uniforms: object, textures: object): ShaderMaterial[];

  	/**
	 * Creates a lowres Material
	 * @param vertexShader {string}
	 * @param fragmentShader {string}
	 * @param uniforms {object}
	 * @returns {ShaderMaterial} the hires Material
	 */
  createLowresMaterial(vertexShader: string, fragmentShader: string, uniforms: object): ShaderMaterial;
  unload(): void;

  /**
	 * Ray-traces and returns the terrain-height at a specific location, returns <code>false</code> if there is no map-tile loaded at that location
	 * @param x {number}
	 * @param z {number}
	 * @returns {boolean|number}
	 */
   terrainHeightAt(x: number, z: number): boolean | number;

  dispose(): void;

  get isLoaded(): boolean;
}