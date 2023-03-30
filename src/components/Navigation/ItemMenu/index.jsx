import React from 'react';
import { Item, ContainerText, LinkCuston } from './styles';

const ItemMenu = ({ url = '/', text, icon }) => {
  return (
    <LinkCuston to={url}>
      <Item>
        {icon}
        <ContainerText>{text}</ContainerText>
      </Item>
    </LinkCuston>
  );
};

export default ItemMenu;
