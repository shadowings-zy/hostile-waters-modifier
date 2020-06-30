const unitItemBox = {
  behemoth: 'behemoth - (behemoth item box_s01.bin_n)',
  hornet: 'hornet - (hornet item box_s01.bin_n)',
  pegasus: 'pegasus - (pegasus item box_s01.bin_n)',
  phoenix: 'phoenix - (phoenix item box_s01.bin_n)',
  puma: 'puma - (puma item box_s01.bin_n)',
  rhino: 'rhino - (rhino item box_s01.bin_n)',
  salamander: 'salamander - (salamander item box_s01.bin_n)',
  scarab: 'scarab - (scarab item box_s01.bin_n)',
  sentinel: 'sentinel - (sentinel item box_s01.bin_n)',
  shark: 'shark - (shark item box_s01.bin_n)',
  vulture: 'vulture - (vulture item box_s01.bin_n)',
}

export default {
  tab: ' Unit Solt',
  description: 'modify unit solt files in ObjectBin folder',
  source: {
    title: 'source unit',
    placeholder: 'choose unit that you want to modify slot',
  },
  target: {
    title: 'target slot',
    placeholder: 'choose unit slot',
  },
  unit: unitItemBox,
  button: 'modify',
  example:
    'For example: \nIf you want to change vulture unit slot into phoenix unit slot, you need to: \nChoose "vulture - (vulture item box_s01.bin_n)" in source unit and choose "phoenix - (phoenix item box_s01.bin_n)" in target slot. \nThen click "modify" button.',
  warning:
    'Warning: \nMake sure the following two points before loading game, otherwise the game will crash: \n1.The archive file saved after the end of each level and before the transition animation. \n2.All model files and unit slot files are consistent with the game archive data.',
}
