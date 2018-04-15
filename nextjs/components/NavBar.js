import React from 'react'
import {Button, ButtonGroup, Panel} from 'react-bootstrap'
import TableSelectButton from './TableSelectButton'

export default props => {
  return (
    <Panel style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
      <span style={{fontWeight: '700', marginRight: '10px'}}>TutorHomie</span>

      {props.isLoading ? <Button disabled={true} bsStyle="info">Loading...</Button> :
        <ButtonGroup>
          <TableSelectButton 
            isLoading={props.isLoading}
            selectSubject={props.selectSubjectFn}
            subject="students"
          />
        </ButtonGroup>
      }

      <Button
        bsStyle='success'
        onClick={props.toggleAddFormFn}
      >
      +
      </Button>
    </Panel>
  )

}