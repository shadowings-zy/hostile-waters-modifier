const unitItemBox = {
  behemoth: '河马 - (behemoth item box_s01.bin_n)',
  hornet: '黄蜂 - (hornet item box_s01.bin_n)',
  pegasus: '飞马 - (pegasus item box_s01.bin_n)',
  phoenix: '凤凰 - (phoenix item box_s01.bin_n)',
  puma: '美洲狮 - (puma item box_s01.bin_n)',
  rhino: '犀牛 - (rhino item box_s01.bin_n)',
  salamander: '火蜥蜴 - (salamander item box_s01.bin_n)',
  scarab: '圣甲虫 - (scarab item box_s01.bin_n)',
  sentinel: '哨兵 - (sentinel item box_s01.bin_n)',
  shark: '鲨鱼 - (shark item box_s01.bin_n)',
  vulture: '秃鹰 - (vulture item box_s01.bin_n)',
}

export default {
  tab: ' 载具插槽',
  description: '通过修改敌对水域中ObjectBin文件夹中的文件，可更改载具装备槽。',
  source: {
    title: '选择载具',
    placeholder: '请选择要更换装备槽的载具',
  },
  target: {
    title: '目标装备槽',
    placeholder: '请选择要更换的新载具装备槽文件',
  },
  unit: unitItemBox,
  button: '修改载具装备槽',
  example:
    '举个例子：\n如果你想把游戏中秃鹰的载具插槽换成凤凰的载具插槽，那么你需要：\n在”选择载具“中选择“秃鹰 - (vulture item box_s01.bin_n)”，\n在“目标装备槽”中选择“凤凰 - (phoenix item box_s01.bin_n)”，\n然后点击“修改载具装备槽”按钮，这样就完成载具插槽的修改了。',
  warning:
    '注意：\n读档前确保以下两点之一，否则读档时会卡退:\n1.该存档是每一关数据统计结束后，过场动画前的存档点存的档。\n2.该存档所有模组和卡槽数据与游戏数据文档相吻合。\n\n比如存档里秃鹰的装备槽（0格）换成了河马的装备槽（15格），\n若游戏文件里秃鹰的装备槽数据（15格）和存档里的数据（15格）一样，这种情况可正常读档。\n若游戏文件里秃鹰的装备槽数据（15格）和存档里的数据（0格）不一样，这种情况读档会卡退。',
}