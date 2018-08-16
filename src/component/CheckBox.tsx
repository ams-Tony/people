import * as  React from 'react';

interface Props {
  name: string,
  label?: string,
  onChange: any,
  image: any,
  onClick: any,
  id: any,
  checked?: boolean,
  disabled?: boolean
}

const CheckBox: React.SFC<Props> = (props) => {
  const { name, id, label, checked, onChange, onClick, disabled, image } = props;

  return (
    <div className="check">
      <input type="checkbox" id={id} disabled={disabled} checked={checked} onChange={onChange}/>
      <label htmlFor={id} ></label>
      <div
        style={{ position: 'relative',
          top: '-20px',
          left: '31px'}}
        onClick={onClick}>
        {image && <img style={{width: '16px'}} src={image.toString()} />}
        {label}
      </div>      
    </div>
  )

}

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
}

export default CheckBox;
