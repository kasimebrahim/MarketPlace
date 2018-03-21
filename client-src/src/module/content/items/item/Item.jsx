import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

class Item extends React.Component{

  render(){
    return (
      <Card>
        <Image src={require(`./elec2.jpeg`)} />
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              added in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.description}.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='shop' />
            22 inStock
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default Item;