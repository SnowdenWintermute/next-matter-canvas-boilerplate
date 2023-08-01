import { MatterSim } from "../MatterSim";
import { EntityShape, EntityType } from "../MatterSim/MatterSimEntities";

let initialized = false;
function initializeSimulation(sim: MatterSim) {
  sim.createRegisteredEntity({ x: 100, y: 100 }, EntityType.STATIC, { shape: EntityShape.CIRCLE, radius: 50 }, { static: false });

  const bottomWall = {
    x: sim.canvasSize.width / 2 - sim.canvasSize.width / 4,
    y: sim.canvasSize.height / 2,
    width: (sim.canvasSize.width / 3) * 2,
    height: sim.canvasSize.height / 20,
  };
  // sim.createRegisteredEntity({x: bottomWall.x, y: bottomWall.y,})
  initialized = true;
}

export default function updatePhysics(sim: MatterSim) {
  if (!initialized) initializeSimulation(sim);
}
