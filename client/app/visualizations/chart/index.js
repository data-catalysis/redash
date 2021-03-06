import { registerVisualization } from '@/visualizations';

import getOptions from './getOptions';
import Renderer from './Renderer';
import Editor from './Editor';

export default function init() {
  registerVisualization({
    type: 'CHART',
    name: 'Chart',
    isDefault: true,
    getOptions,
    Renderer,
    Editor,

    defaultColumns: 3,
    defaultRows: 8,
    minColumns: 1,
    minRows: 5,
  });
}

init.init = true;
