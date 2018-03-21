import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbDivider = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbDivider