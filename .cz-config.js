'use strict';

module.exports = {

  types: [
    {
      value: ':construction: WIP',
      name: '💪  WIP:      正在进行的工作'
    },
    {
      value: ':sparkles: feat',
      name: '✨  feat:     新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛  fix:      BUG修复'
    },
    {
      value: ':hammer: refactor',
      name: '🔨  refactor: 既不修复错误也不添加功能的代码更改'
    },
    {
      value: ':pencil: docs',
      name: '📝  docs:     仅文档更改'
    },
    {
      value: ':white_check_mark: test',
      name: '✅  test:     添加缺少的测试或更正现有测试'
    },
    {
      value: ':thought_balloon: chore',
      name: '🗯  chore:    不修改src或测试文件的更改。例如更新构建任务、包管理器'
    },
    {
      value: ':lipstick: ui',
      name: '💄 更新UI和样式文件',
    },
    {
      value: ':art: style',
      name:
        '🎨 不影响代码含义的更改（空格、格式、缺少分号等）',
    },
    {
      value: 'revert',
      name: '⏪  revert:   还原为提交'
    },
    {
      value: ':package: dep_up',
      name: '📦 正在更新已编译的文件或包。',
    },
    {
      value: ':green_heart: fixci',
      name: '💚 正在修复CI生成。',
    },
    {
      value: ':truck: mv',
      name: '🚚 移动或重命名文件。',
    },
    {
      value: ':fire: prune',
      name: '🔥 正在删除代码或文件。',
    },
    {
      value: ':bookmark: release',
      name: '🔖 发布/版本标签。',
    },
    {
      value: ':rocket: first release',
      name: '🚀 第一次发布！',
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
