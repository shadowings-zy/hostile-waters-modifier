export default [
  {
    name: '载具',
    type: 0,
    detail: [
      {
        key: 'Lifter',
        description: '飞马',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Lifter',
      },
      {
        key: 'Harvester',
        description: '圣甲虫',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Harvester',
      },
      {
        key: 'chopper',
        description: '黄蜂',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : chopper',
      },
      {
        key: 'Hovertank',
        description: '火蜥蜴',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Hovertank',
      },
      {
        key: 'Reconbuggy',
        description: '美洲狮',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Reconbuggy',
      },
      {
        key: 'Staticplatform',
        description: '哨兵',
        type: 0,
        value:
          'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Staticplatform',
      },
      {
        key: 'Bomber',
        description: '秃鹰',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Bomber',
      },
      {
        key: 'HeavyTank',
        description: '犀牛',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_CURRENTPLAYER \n  AIS_UNITTYPE_SPECIFIC : HeavyTank',
      },
      {
        key: 'Superchopper',
        description: '凤凰',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Superchopper',
      },
      {
        key: 'Superhover',
        description: '鲨鱼',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Superhover',
      },
      {
        key: 'Supertank',
        description: '河马',
        type: 0,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Supertank',
      },
    ],
  },
  {
    name: '武器',
    type: 1,
    detail: [
      {
        key: 'Minigun',
        description: '解剖刀',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Minigun',
      },
      {
        key: 'Missile',
        description: '长弓',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Missile',
      },
      {
        key: 'Laser',
        description: '长剑',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Laser',
      },
      {
        key: 'Flamer',
        description: '暴火',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Flamer',
      },
      {
        key: 'Lobber',
        description: '战锤',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_CURRENTPLAYER \n  AIS_UNITTYPE_SPECIFIC : Lobber',
      },
      {
        key: 'EMP',
        description: '声暴',
        type: 1,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_CURRENTPLAYER \n  AIS_UNITTYPE_SPECIFIC : EMP',
      },
    ],
  },
  {
    name: '装备',
    type: 2,
    detail: [
      {
        key: 'soulunit',
        description: '灵魂捕手',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : soulunit',
      },
      {
        key: 'Shield',
        description: '盾',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Shield',
      },
      {
        key: 'armour',
        description: '装甲',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : armour',
      },
      {
        key: 'scavunit',
        description: '循环部件',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : scavunit',
      },
      {
        key: 'Cooler',
        description: '充电部件',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Cooler',
      },
      {
        key: 'Cloak',
        description: '隐形部件',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Cloak',
      },
      {
        key: 'Repair',
        description: '维修部件',
        type: 2,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Repair',
      },
    ],
  },
  {
    name: '灵魂捕手',
    type: 3,
    detail: [
      {
        key: 'Ransom',
        description: 'Ransom',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Ransom',
      },
      {
        key: 'Borden',
        description: 'Borden',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Borden',
      },
      {
        key: 'Madsen',
        description: 'Madsen',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Madsen',
      },
      {
        key: 'Sinclair',
        description: 'Sinclair',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Sinclair',
      },
      {
        key: 'Kenzie',
        description: 'Kenzie',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Kenzie',
      },
      {
        key: 'Lazare',
        description: 'Lazare',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Lazare',
      },
      {
        key: 'Kroker',
        description: 'Kroker',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Kroker',
      },
      {
        key: 'Patton',
        description: 'Patton',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Patton',
      },
      {
        key: 'Korolev',
        description: 'Korolev',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Korolev',
      },
      {
        key: 'Elroy',
        description: 'Elroy',
        type: 3,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : Elroy',
      },
    ],
  },
  {
    name: '安泰',
    type: 4,
    detail: [
      {
        key: 'carrierguns',
        description: '安泰主炮',
        type: 4,
        value: 'Action: AIScript_MakeAvailableForBuilding\n  AIS_SPECIFICPLAYER : 0\n  AIS_UNITTYPE_SPECIFIC : carrierguns',
      },
    ],
  },
]
