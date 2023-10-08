import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

import { BodyShape, createNpc } from './npc'
import { defaultFemaleWearables, defaultMaleWearables, femaleWearables, maleWearables } from './wearables'

export function main() {
  // Female NPCs
  femaleWearables.forEach(({ urn, title }, index) => {
    createNpc(title, BodyShape.Female, { position: Vector3.create(2 + index * 1.3, 0.1, 4 - (index % 2)) }, [
      ...defaultFemaleWearables,
      urn
    ])
  })

  // Male NPCs
  maleWearables.forEach(({ urn, title }, index) => {
    createNpc(
      title,
      BodyShape.Male,
      {
        position: Vector3.create(2 + index * 1.3, 0.1, 12 + (index % 2)),
        rotation: Quaternion.fromEulerDegrees(0, 180, 0)
      },
      [...defaultMaleWearables, urn]
    )
  })

  // Grass
  const grass = engine.addEntity()
  GltfContainer.create(grass, { src: 'models/grass.glb' })
  Transform.create(grass, { position: Vector3.create(8, 0, 8) })
}
