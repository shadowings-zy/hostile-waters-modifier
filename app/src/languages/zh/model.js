export default {
  tab: ' 载具模型',
  description: '通过修改敌对水域中ObjectBin文件夹中的文件，可更改载具模型。',
  source: {
    title: '选择载具',
    placeholder: '请选择要更换模型的载具',
  },
  target: {
    title: '目标模型',
    placeholder: '请选择要更换的新模型文件',
  },
  button: '修改载具模型',
  example:
    '举个例子：\n如果你想把游戏中鲨鱼的模型换成火蜥蜴的模型，那么你需要：\n1、在“选择模型”中选择“SuperHover.bin_b”，在“目标模型”中选择“HoverTank.bin_b”，点击修改载具模型按钮。\n2、在初始模型中选择“SuperHover.bin_c”，在目标模型中选择“HoverTank.bin_c”，点击修改载具模型按钮。\n3、在初始模型中选择“SuperHover.bin_n”，在目标模型中选择“HoverTank.bin_n”，点击修改载具模型按钮。\n这样进入游戏你就会发现鲨鱼的模型已经被换成火蜥蜴的模型了。\n由于敌对水域模型太多，本功能实际上只是将选定的初始模型和目标模型的文件进行了一个替换。\n所以这里还需要各位使用者自行探索。',
  warning:
    '注意：\n读档前确保以下两点之一，否则读档时会卡退:\n1.该存档是每一关数据统计结束后，过场动画前的存档点存的档。\n2.该存档所有模组和卡槽数据与游戏数据文档相吻合。\n\n比如存档里鲨鱼的模型（SuperHover.bin_b）换成了火蜥蜴的模型（HoverTank.bin_b），\n若游戏文件里鲨鱼的模型（SuperHover.bin_b）和存档里的数据（SuperHover.bin_b）一样，这种情况可正常读档。\n若游戏文件里鲨鱼的模型（SuperHover.bin_b）和存档里的数据（HoverTank.bin_b）不一样，这种情况读档会卡退。',
}
