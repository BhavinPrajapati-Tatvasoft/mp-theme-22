import { Avatar } from '@material-ui/core';
import React from 'react';
import { IDownArrow } from '../assets/images';
function DropdownIcon() {
    return (
        <Avatar variant="square" src={IDownArrow} alt="Down Arrow" className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" />
    );
};
export default DropdownIcon;