import styled from 'styled-components';
import { Dropdown as DropdownAntd, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Button } from '@atomic';

const StyleSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
`;

const Dropdown = ({ title = 'select', menu }) => {
  return (
    <DropdownAntd overlay={menu}>
      <Button width="100%">
        <StyleSpace>
          {title}
          <DownOutlined />
        </StyleSpace>
      </Button>
    </DropdownAntd>
  );
};

export default Dropdown;
