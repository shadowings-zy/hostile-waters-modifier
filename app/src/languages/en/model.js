export default {
  tab: ' Unit Model',
  description: 'modify unit model files in ObjectBin folder',
  source: {
    title: 'source unit',
    placeholder: 'choose unit that you want to modify',
  },
  target: {
    title: 'target model',
    placeholder: 'choose unit model',
  },
  button: 'modify',
  example:
    'For example: \nIf you want to change shark into salamander, you need to: \n1. Choose "SuperHover.bin_b" in source unit and choose "HoverTank.bin_b" in target model. \n2. Choose "SuperHover.bin_c" in source unit and choose "HoverTank.bin_c" in target model. \n3. Choose "SuperHover.bin_n" in source unit and choose "HoverTank.bin_n" in target model. \nThen click "modify" button.',
  warning:
    'Warning: \nMake sure the following two points before loading game, otherwise the game will crash: \n1.The archive file saved after the end of each level and before the transition animation. \n2.All model files and unit slot files are consistent with the game archive data.',
}
