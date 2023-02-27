const wearablesFemale = [
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:d9b0dca0-f2c8-41bf-8802-48c288e87a5f', // Cowbella
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:966786e1-a833-41fd-bdd1-183e578fab65', // Neon Temptress
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:73e81071-7b7a-4ffb-933d-4b06ba21451d', // Nite Lite
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:933c7253-2f6b-4ff2-aadd-5bf2d3464d61', // Disco Zebra
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:97c202b5-35c0-4e77-8d29-b55670d40caf', // Invisible Dancer
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:dc209acf-297d-465c-a9a4-f56126caee75', // Strictly Business
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:2a424e9c-c6fb-4783-99ed-63d260d90ed2', // The Cocoon
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:e72ce7ea-dae8-4d3a-b612-98b35bcbd0c5', // Funky Gamer
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:f8fb3ad6-959b-4a8b-a6c2-eac029436f62', // Chainlink
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:43c54c27-bc63-4be2-9610-e5ef1c68f51a', // Blue Angel
];
const wearablesMale = [
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:f388728c-66da-4f5e-ab04-cb77903529e4', // Cyber Boy
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:390134f9-884f-42b9-a9f0-8dd04c68c91c', // Neon Accordion
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:12691adb-1eb2-45c7-b6a3-84b74bff91b6', // Rorschach
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:e5fbba88-a37f-46a0-a66f-46309043438e', // Graffitipad
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:9cb45e1e-b724-48a3-988c-0ea525d53171', // Phat Cat
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:87733993-b0af-4d7a-900c-3728400e8d71', // Street Camo
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:a8443383-cdcc-4b69-8fd5-c849f9aa4375', // The Gold Boss
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:69b9659b-679e-458c-af7d-2fd32b804fb8', // Disco Biker
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:899ab5ab-195c-40c8-8cb9-27a7da9d318c', // Neon Nemesis
  'urn:decentraland:matic:collections-thirdparty:dolcegabbana-disco-drip:0x4bd77619a75c8eda181e3587339e7011da75bf0e:7d6ba4ac-c55f-453f-932b-b72231496a7a', // The Platinum Boss
];
const skinColor = new Color4(
  0.9490196108818054,
  0.7607843279838562,
  0.6470588445663452,
  1
);
const hairColor = new Color4(
  0.8313725590705872,
  0.8235576748847961,
  0.8230588436126709,
  1
);

const createNpc = (
  position: Vector3,
  bodyShape: string,
  wearables: string[]
): void => {
  const npc = new Entity();
  const npcShape = new AvatarShape();

  npc.addComponent(npcShape);
  npc.addComponent(new Transform({ position }));
  npcShape.skinColor = skinColor;
  npcShape.hairColor = hairColor;
  npcShape.bodyShape = bodyShape;
  npcShape.wearables = wearables;

  engine.addEntity(npc);
};

wearablesFemale.forEach((urn: string, index: number) => {
  createNpc(
    new Vector3(2.5 + index * 1.2, 0, 5),
    'urn:decentraland:off-chain:base-avatars:BaseFemale',
    [
      'urn:decentraland:matic:collections-v2:0x189e481389dec43d33c735712b5f1fa4b2c9dd63:0', // Doki Doll Face Pink
      'urn:decentraland:matic:collections-v2:0xf370aea38d9f4462236807b68d20c57fc814e1e9:0', // Doki Chunky Pigtails
      urn,
    ]
  );
});

wearablesMale.forEach((urn: string, index: number) => {
  createNpc(
    new Vector3(2.5 + index * 1.2, 0, 11),
    'urn:decentraland:off-chain:base-avatars:BaseMale',
    [
      'urn:decentraland:matic:collections-v2:0x1091adb899c73075af0e5742d2aa24fd35a7cefd:0', // Doki Doll Face V1
      'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:17', // MVMF22 Ritual Spiky Hair
      urn,
    ]
  );
});
