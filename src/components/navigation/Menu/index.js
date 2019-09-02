import React from 'react'
import styled from 'styled-components'

import Link from '../../content/Link'
import Grid from '../../layout/Grid'
import Col from '../../layout/Col'
import Row from '../../layout/Row'

const MenuContainer = styled.div`
  height: 60px;
  background: #18ACC4;
  padding: 16px 0;
`

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`

const MenuItem = styled.li`
  margin-right: 24px;
`

const MenuLink = styled(Link)`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
`

const MyAccount = styled(MenuLink)`
  font-size: 20px;
  line-height: 1.2;
`

const Menu = () => (
  <MenuContainer>
    <Grid>
      <Row>
        <Col xs={12} sm={3} md={3} lg={3}>
          <MenuList>
            <MenuItem>
              <MyAccount>Minha conta</MyAccount>
            </MenuItem>
            <MenuItem>
              <MenuLink>Pré-matrículas</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Bolsas favoritas</MenuLink>
            </MenuItem>
          </MenuList>
        </Col>
      </Row>
    </Grid>
  </MenuContainer>
)

Menu.displayName = 'Menu'

export default Menu
