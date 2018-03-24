import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

class Item extends React.Component{

  render(){
    return (
      <div>
          <div className="card">
            <img className="card-img-top" src="/assets/imgs/chemical.jpeg" alt="Card image cap" />
            <div className="card-body bg-transparent">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <span>
                <a href="tel:+1-303-499-7111">Call</a>
              </span>
              <span>
                <a href="sms:+251938901050?body=Hello World!">SMS</a>
              </span>
            </div>
          </div>
          
      
      {/*
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
      </Card>*/
    }
    </div>
    )
  }
}

export default Item;