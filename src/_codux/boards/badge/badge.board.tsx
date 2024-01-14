import { createBoard } from '@wixc3/react-board';
import Badge from '../../../components/atoms/badge/badge';

export default createBoard({
    name: 'Badge',
    Board: () => <Badge intent="primary" autoFocus />,
    isSnippet: true,
});
